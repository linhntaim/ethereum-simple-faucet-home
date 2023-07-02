import {ethers} from 'ethers'

export class Ethereum
{
    constructor() {
        this.provider = null
        this.signer = null
        this.chains = null
    }

    /**
     *
     * @returns {boolean}
     */
    connected() {
        return this.provider != null
    }

    connect() {
        if (!this.connected()) {
            if (window.ethereum == null) {
                this.provider = null
            }
            else {
                this.updateConnection()
                this.on('accountsChanged', this.updateConnection.bind(this))
                this.on('chainChanged', this.updateConnection.bind(this))
            }
        }
        return this
    }

    updateConnection() {
        this.provider = new ethers.BrowserProvider(window.ethereum)
        this.signer = null
    }

    on(event, callback) {
        if (this.connected()) {
            window.ethereum.addListener(event, callback)
        }
    }

    off(event = null, callback = null) {
        if (this.connected()) {
            if (callback != null) {
                window.ethereum.removeListener(event, callback)
            }
            else {
                window.ethereum.removeAllListeners(event)
            }
        }
    }

    hasSigner() {
        return this.connected() && this.signer != null ? this.signer : false
    }

    /**
     *
     * @returns {Promise}
     */
    getSigner() {
        return this.signer != null
            ? new Promise(resolve => resolve(this.signer))
            : this.provider.getSigner().then(signer => this.signer = signer)
    }

    /**
     * @see https://github.com/ethereum-lists/chains
     * @see https://chainid.network/chains_mini.json
     *
     * @returns {Promise}
     */
    getChains() {
        return this.chains != null
            ? new Promise(resolve => resolve(this.chains))
            : fetch('https://chainid.network/chains_mini.json')
                .then(res => res.json())
                .then(chains => {
                    this.chains = {}
                    chains.forEach(chain => this.chains[chain.chainId] = chain)
                    return this.chains
                })
    }

    declareContract(address, abi) {
        return new ethers.Contract(address, abi, this.signer)
    }
}