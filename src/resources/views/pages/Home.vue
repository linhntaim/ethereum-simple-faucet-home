<template lang="pug">
.px-4.py-5.my-5.text-center
    h1.display-5.fw-bold.text-body-emphasis Get & Donate Coins
    .col-lg-6.mx-auto
        p.lead.mb-4
            | Firstly, you must connect your wallet and switch to the supported networks.
            | Then, to get coins, simply click on <strong>"Send me"</strong> button.
            | Besides, we are really happy and thankful if you can make a donation to our decentralized funds.
        .text-center
        template(v-if="wallet.installed")
            template(v-if="wallet.address")
                .alert.alert-success
                    span Your address:<br><strong>{{ wallet.address }}</strong>
                    br
                    span(v-if="wallet.chain != null") {{ wallet.chain.name }}
                    span.text-danger(v-else) Unknown or Not-supported Network
                template(v-if="wallet.chain != null")
                    .d-grid.gap-2.d-sm-flex.justify-content-sm-center
                        button.btn.btn-primary.btn-lg.px-4.gap-3(type="button" @click="onSendMeClick")
                            | Send me {{ sendingAmount }} {{ wallet.chain.nativeCurrency.symbol }}
                    hr
                    .d-grid.gap-2.d-sm-flex.justify-content-sm-center
                        input.form-control.text-end(type="number" step="0.01" min="0.01" max="100" v-model="donatingAmount" )
                        button.btn.btn-secondary.btn-lg.px-4.gap-3(type="button" @click="onDonateClick") Donate
                    .alert.alert-warning.small.mt-2
                        | Click <strong>Donate</strong> to send {{ donatingAmount }} {{ wallet.chain.nativeCurrency.symbol }} to the <u>smart contract</u> at the address "<strong>{{ faucetContractAddress }}</strong>" via <em>your wallet</em>.
            .d-grid.gap-2.d-sm-flex.justify-content-sm-center(v-else)
                button.btn.btn-primary.btn-lg.px-4.gap-3(type="button" @click="onConnectWalletClick") Connect wallet
        .alert.alert-danger(v-else) Please install an Ethereum-based Wallet.
</template>

<script>
// @ is an alias to /src
import {app} from '@/bootstrap/app'
import {formatEther, parseUnits} from 'ethers'
import {SuccessToast} from '@/resources/views/components/toast/success-toast'
import {DangerToast} from '@/resources/views/components/toast/danger-toast'

export default {
    // eslint-disable-next-line
    name: 'Home',
    data() {
        return {
            supportedChains: {
                57000: {
                    faucetContractAddress: '0xDc636FE5F6052271B13a386763F2f631bbf8Ad30',
                },
            },
            wallet: {
                installed: false,
                address: null,
                chain: null,
            },
            sendingAmount: 0.02,
            donatingAmount: 0.02,
        }
    },
    computed: {
        chainId() {
            return this.wallet.chain == null ? null : parseInt(this.wallet.chain.chainId)
        },
        faucetContractAddress() {
            return this.chainId == null ? null : this.supportedChains[this.chainId].faucetContractAddress
        },
    },
    beforeRouteEnter() { // cannot access `this`
        app.$log.debug('page', 'home.beforeRouteEnter')
    },
    beforeRouteUpdate() {
        this.$log.debug('page', 'home.beforeRouteUpdate')
    },
    beforeRouteLeave() {
        this.$log.debug('page', 'home.beforeRouteLeave')
    },
    beforeCreate() {
        this.$log.debug('page', 'home.beforeCreate')
    },
    created() {
        this.$log.debug('page', 'home.created')
        this.init()
    },
    beforeUpdate() {
        this.$log.debug('page', 'home.beforeUpdate')
    },
    updated() {
        this.$log.debug('page', 'home.updated')
    },
    beforeMount() {
        this.$log.debug('page', 'home.beforeMount//rendering')
    },
    mounted() {
        this.$log.debug('page', 'home.mounted//rendered')
    },
    beforeUnmount() {
        this.$log.debug('page', 'home.beforeUnmount')
    },
    unmounted() {
        this.$log.debug('page', 'home.unmounted')

        this.detachEvents()
    },
    methods: {
        init() {
            this.wallet.installed = this.$ethereum.connect().connected()
            const signer = this.$ethereum.hasSigner()
            if (signer !== false) {
                this.initSigner(signer)
            }
        },
        onConnectWalletClick() {
            this.$ethereum.getSigner()
                .then(signer => this.initSigner(signer))
                .catch(err => console.log(err))
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
                        if (chainId in chains && chainId in this.supportedChains) {
                            this.wallet.chain = chains[chainId]

                            const contract = this.$ethereum.declareContract(this.faucetContractAddress, [
                                'function getSendingAmount() public view returns (uint256)',
                            ])
                            contract.getSendingAmount()
                                .then(res => {
                                    this.sendingAmount = parseFloat(formatEther(res))
                                })
                                .catch(err => console.log(err))
                        }
                        else {
                            this.wallet.chain = null
                        }
                    })
                })
                .catch(err => {
                    this.$bus.emit('toast', new DangerToast(err.reason || 'Something went wrong.'))
                })
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
        onSendMeClick() {
            const contract = this.$ethereum.declareContract(this.faucetContractAddress, [
                'function sendMe()',
            ])
            contract.sendMe()
                .then(() => {
                    this.$bus.emit('toast', new SuccessToast('Successfully request to send ' + this.sendingAmount + ' ' + this.wallet.chain.nativeCurrency.symbol + ' to your wallet. Please wait for transaction confirmation.'))
                })
                .catch(err => {
                    this.$bus.emit('toast', new DangerToast(err.reason || 'Something went wrong.'))
                })
        },
        onDonateClick() {
            this.$ethereum.getSigner()
                .then(signer => {
                    signer.sendTransaction({
                            to: this.faucetContractAddress,
                            value: parseUnits(this.donatingAmount.toString(), 18),
                        })
                        .then(() => {
                            this.$bus.emit('toast', new SuccessToast('Successfully request to donate ' + this.donatingAmount + ' ' + this.wallet.chain.nativeCurrency.symbol + ' to the smart contract. Please wait for transaction confirmation.'))
                        })
                        .catch(err => {
                            console.log(err)
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
