<template lang="pug">
.px-4.py-5.my-5.text-center
    h1.display-5.fw-bold.text-body-emphasis Get & Donate Coins
    .col-lg-6.mx-auto
        p.lead.mb-4
            | Firstly, you must connect your wallet and switch to the <span class="tip" title="See About page">supported networks</span>.
            | Then, to get coins, simply click the <strong>"Get"</strong> button below.
            | Besides, we are really happy and thankful if you can make a donation to our decentralized funds.
        .text-center
        template(v-if="wallet.installed")
            template(v-if="wallet.address")
                .alert.alert-primary
                    span Your address:<br><strong>{{ obfuscatedWalletAdress }}</strong>
                    br
                    span(v-if="wallet.chain != null") {{ wallet.chain.name }}
                    span.text-danger(v-else) Unknown or Not-supported Network
                template(v-if="wallet.chain != null")
                    .d-grid.gap-2.d-sm-flex.justify-content-sm-center
                        button.btn.btn-primary.btn-lg.px-4.gap-3(:disabled="loading.get" @click="onGetClick" type="button")
                            | Get {{ sendingAmount }} {{ wallet.chain.nativeCurrency.symbol }}
                    .form-text(v-if="lastSentAt > 0")
                        span(:class="{'tip text-danger': lastSentMinutesAgo < delayMinutes}" :title="'You can get coins once every ' + delayDurationText")
                            template(v-if="lastSentDuration.hour > 0 || lastSentDuration.minute > 0")
                                | You got coins {{ lastSentDurationText }} ago
                            template(v-else)
                                | You've got coins recently
                    hr
                    .d-grid.gap-2.d-sm-flex.justify-content-sm-center
                        input.form-control.border-warning.text-end.fw-bold(type="number" step="0.01" min="0.01" max="100" v-model="donatingAmount" )
                        button.btn.btn-warning.btn-lg.px-4.gap-3(:disabled="loading.donate" @click="onDonateClick" type="button") Donate
                    .alert.alert-warning.small.mt-2.mb-2
                        | Click <strong>Donate</strong> to send {{ donatingAmount }} {{ wallet.chain.nativeCurrency.symbol }}
                        | to our <span class="tip" title="Which manages the fund (see About page for the sourcecode)">smart contract</span> at the address "<strong>{{ faucetContractAddress }}</strong>" via <em>your wallet</em>.
                    .progress(role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100")
                        .progress-bar.bg-warning(:style="{width: fundPercentage + '%'}")
            .d-grid.gap-2.d-sm-flex.justify-content-sm-center(v-else)
                button.btn.btn-primary.btn-lg.px-4.gap-3(type="button" @click="onConnectWalletClick") Connect wallet
        .alert.alert-danger(v-else) Please install an Ethereum-based Wallet.
</template>

<script>
// @ is an alias to /src
import {formatEther, parseUnits} from 'ethers'
import {SuccessToast} from '@/resources/views/components/toast/success-toast'
import {DangerToast} from '@/resources/views/components/toast/danger-toast'
import supportedChains from '@/resources/data/supported-chains.json'

export default {
    // eslint-disable-next-line
    name: 'Home',
    data() {
        return {
            loading: {
                get: false,
                donate: false,
            },
            wallet: {
                installed: false,
                address: null,
                chain: null,
            },
            fund: {
                balance: 0.0,
                cap: 0.0,
            },
            delayMinutes: 0,
            lastSentAt: 0,
            sendingAmount: 0.02,
            donatingAmount: 0.02,
            now: 0,

            refreshDataFromContractTimeout: null,
        }
    },
    computed: {
        chainId() {
            return this.wallet.chain == null ? null : parseInt(this.wallet.chain.chainId)
        },
        obfuscatedWalletAdress() {
            return this.wallet.address == null ? null : this.wallet.address.substr(0, 6) + '...' + this.wallet.address.substr(this.wallet.address.length - 4)
        },
        faucetContractAddress() {
            return this.chainId == null ? null : supportedChains[this.chainId].faucetContractAddress
        },
        fundPercentage() {
            return this.fund.cap === 0 ? 100 : (percentage => percentage > 100 ? 100 : percentage)(Math.floor(this.fund.balance / this.fund.cap * 100))
        },
        lastSentMinutesAgo() {
            return Math.floor((this.now - this.lastSentAt) / 60)
        },
        lastSentDuration() {
            return {
                hour: Math.floor(this.lastSentMinutesAgo / 60),
                minute: this.lastSentMinutesAgo % 60,
            }
        },
        lastSentDurationText() {
            return (this.lastSentDuration.hour > 0 ? (this.lastSentDuration.hour + ' ' + (this.lastSentDuration.hour > 1 ? 'hours ' : 'hour ')) : '')
                + (this.lastSentDuration.minute > 0 ? (this.lastSentDuration.minute + ' ' + (this.lastSentDuration.minute > 1 ? 'minutes' : 'minute')) : '')
        },
        delayDuration() {
            return {
                hour: Math.floor(this.delayMinutes / 60),
                minute: this.delayMinutes % 60,
            }
        },
        delayDurationText() {
            const delayDuration = this.delayDuration
            return (delayDuration.hour > 0 ? (delayDuration.hour + ' ' + (delayDuration.hour > 1 ? 'hours' : 'hour')) : '')
                + (delayDuration.minute + ' ' + (delayDuration.minute > 1 ? 'minutes' : 'minute'))
        },
    },
    mounted() {
        this.construct()
    },
    unmounted() {
        this.destruct()
    },
    methods: {
        construct() {
            this.wallet.installed = this.$ethereum.connect().connected()
            const signer = this.$ethereum.hasSigner()
            if (signer !== false) {
                this.initSigner(signer)
            }
        },
        destruct() {
            this.stopRefreshDataFromContract()
            this.detachEvents()
        },
        onConnectWalletClick() {
            this.$ethereum.getSigner()
                .then(signer => this.initSigner(signer))
                .catch(err => {
                    this.$bus.emit('toast', new DangerToast(err.reason || 'Something went wrong.'))
                })
        },
        initSigner(signer) {
            this.fillDataFromSigner(signer)
            this.attachEvents()
        },
        fillDataFromSigner(signer) {
            this.wallet.address = signer.address
            signer.provider.getNetwork()
                .then(network => {
                    this.$ethereum.getChains().then(chains => {
                        const chainId = parseInt(network.chainId)
                        if (chainId in chains && chainId in supportedChains) {
                            this.wallet.chain = chains[chainId]

                            this.refreshDataFromContract()
                        }
                        else {
                            this.stopRefreshDataFromContract()

                            this.wallet.chain = null
                        }
                    })
                })
                .catch(err => {
                    this.$bus.emit('toast', new DangerToast(err.reason || 'Something went wrong.'))
                })
        },
        refreshDataFromContract() {
            this.fillDataFromContract()
            this.refreshDataFromContractTimeout = setTimeout(() => {
                this.refreshDataFromContract()
            }, 60000) // 1 minute
        },
        stopRefreshDataFromContract() {
            if (this.refreshDataFromContractTimeout != null) {
                clearTimeout(this.refreshDataFromContractTimeout)
                this.refreshDataFromContractTimeout = null
            }
        },
        fillDataFromContract() {
            const contract = this.$ethereum.declareContract(this.faucetContractAddress, [
                'function getBalance() public view returns (uint256)',
                'function getSendingAmount() public view returns (uint256)',
                'function getCap() public view returns (uint256)',
                'function getDelayMinutes() public view returns (uint256)',
                'function getTimeout() public view returns (uint256)',
            ])
            contract.getSendingAmount()
                .then(res => {
                    this.sendingAmount = parseFloat(formatEther(res))
                })
                .catch(err => console.log(err))
            contract.getCap()
                .then(res => {
                    this.fund.cap = parseFloat(formatEther(res))
                })
                .catch(err => console.log(err))
            contract.getBalance()
                .then(res => {
                    this.fund.balance = parseFloat(formatEther(res))
                })
                .catch(err => console.log(err))
            contract.getDelayMinutes()
                .then(res => {
                    this.delayMinutes = parseInt(res)
                })
                .catch(err => console.log(err))
            contract.getTimeout()
                .then(res => {
                    this.lastSentAt = parseInt(res)
                })
                .catch(err => console.log(err))
            this.now = Math.floor(new Date().getTime() / 1000)
        },
        onWalletChanged() {
            this.$ethereum.getSigner()
                .then(signer => this.fillDataFromSigner(signer))
                .catch(err => {
                    this.$bus.emit('toast', new DangerToast(err.reason || 'Something went wrong.'))
                })
        },
        attachEvents() {
            this.$ethereum.on('accountsChanged', this.onWalletChanged)
            this.$ethereum.on('chainChanged', this.onWalletChanged)
        },
        detachEvents() {
            this.$ethereum.off('accountsChanged', this.onWalletChanged)
            this.$ethereum.off('chainChanged', this.onWalletChanged)
        },
        onGetClick() {
            this.getWithFeePaidByOwner()
        },
        getWithFeePaidByOwner() {
            this.loading.get = true
            fetch(process.env.VUE_APP_FAUCET_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chainId: this.chainId,
                    address: this.wallet.address,
                }),
            })
                .then(res => {
                    if (res.status >= 400 && res.status < 600) {
                        throw res
                    }
                    return res.json()
                })
                .then(() => {
                    this.loading.get = false
                    this.$bus.emit('toast', new SuccessToast('Successfully request to send ' + this.sendingAmount + ' ' + this.wallet.chain.nativeCurrency.symbol + ' to your wallet. Please wait for transaction confirmation.'))
                })
                .catch(() => {
                    this.loading.get = false
                    this.$bus.emit('toast', new DangerToast('Something went wrong. Please try again.'))
                })
        },
        getWithFeePaidByUser() {
            const contract = this.$ethereum.declareContract(this.faucetContractAddress, [
                'function sendMe()',
            ])
            this.loading.get = true
            contract.sendMe()
                .then(() => {
                    this.loading.get = false
                    this.$bus.emit('toast', new SuccessToast('Successfully request to send ' + this.sendingAmount + ' ' + this.wallet.chain.nativeCurrency.symbol + ' to your wallet. Please wait for transaction confirmation.'))
                })
                .catch(err => {
                    this.loading.get = false
                    this.$bus.emit('toast', new DangerToast(err.reason || 'Something went wrong.'))
                })
        },
        onDonateClick() {
            this.$ethereum.getSigner()
                .then(signer => {
                    this.loading.donate = true
                    signer.sendTransaction({
                            to: this.faucetContractAddress,
                            value: parseUnits(this.donatingAmount.toString(), 18),
                        })
                        .then(() => {
                            this.loading.donate = false
                            this.$bus.emit('toast', new SuccessToast('Successfully request to donate ' + this.donatingAmount + ' ' + this.wallet.chain.nativeCurrency.symbol + ' to the smart contract. Please wait for transaction confirmation.'))
                        })
                        .catch(err => {
                            this.loading.donate = false
                            this.$bus.emit('toast', new DangerToast(err.reason || 'Something went wrong.'))
                        })
                })
                .catch(err => {
                    this.$bus.emit('toast', new DangerToast(err.reason || 'Something went wrong.'))
                })
        },
    },
}
</script>

<style lang="scss" scoped>
.tip[title] {
    border-bottom: 1px dashed #212529;
}

.alert-warning {
    .tip[title] {
        border-color: #664d03;
    }
}

.form-text {
    .tip[title] {
        border-color: rgba(33, 37, 41, 0.75);
    }
}

.text-danger {
    &.tip[title] {
        border-color: rgb(220, 53, 69);
    }
}
</style>