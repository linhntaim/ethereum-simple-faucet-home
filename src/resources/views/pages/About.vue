<template lang="pug">
.px-4.py-5.my-5.text-center
    h1.display-5.fw-bold.text-body-emphasis About
    h2#contact.mt-4 #contact
    .mb-2
        | Nguyen Tuan Linh &lt;<a href="mailto:linhnt.aim@outlook.com" target="_blank">linhnt.aim@outlook.com</a>&gt;
    h2#sourcecode.mt-4 #sourcecode
    .mb-2
        | Website:&nbsp;
        a(href="https://github.com/linhntaim/ethereum-simple-faucet-home" target="_blank") https://github.com/linhntaim/ethereum-simple-faucet-home
    .mb-2
        | Endpoint:&nbsp;
        a(href="https://github.com/linhntaim/ethereum-simple-faucet-endpoint" target="_blank") https://github.com/linhntaim/ethereum-simple-faucet-endpoint
    .mb-2
        | Smartcontract:&nbsp;
        a(href="https://github.com/linhntaim/ethereum-simple-faucet-contract" target="_blank") https://github.com/linhntaim/ethereum-simple-faucet-contract
    h2#suported-network.mt-4 #supported networks
    .mb-2(v-for="supportedNetwork in supportedNetworks")
        a(:href="`https://chainlist.org/?search=${encodeURIComponent(supportedNetwork)}&testnets=true`" target="_blank") {{ supportedNetwork }}
    h2#suported-network.mt-4 #supported wallets
    .mb-2
        a(href="https://metamask.io/" target="_blank") Metamask
    .mb-2.small
        | .. maybe more
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'About',
    data() {
        return {
            supportedNetworks: [],
        }
    },
    mounted() {
        this.fillSupportedNetworks()
    },
    methods: {
        fillSupportedNetworks() {
            this.$ethereum.getChains().then(chains => {
                Object.keys(this.$config.env).forEach(key => {
                    if (key.startsWith('VUE_APP_FAUCET_CONTRACT_ADDRESS_')) {
                        const chainId = parseInt(key.substring('VUE_APP_FAUCET_CONTRACT_ADDRESS_'.length))
                        if (chainId in chains) {
                            this.supportedNetworks.push(chains[chainId].name)
                        }
                    }
                })
            })
        },
    },
}
</script>
