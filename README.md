# ethereum-simple-faucet-home

The homepage provides a UI for users to request to get fund from & make donation to [the faucet contract](https://github.com/linhntaim/ethereum-simple-faucet-contract).

## Project setup
```
npm install && npm run setup
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Configuration

_Note: The faucet contract is supported to be deployed to multiple chains._

### Faucet endpoint

The faucet endpoint where the request to get fund would be sent to is an environment variable created in the following format:

```
VUE_APP_FAUCET_ENDPOINT={endpoint_url}
```

- `endpoint_url`: The URL of the deployed faucet endpoint.

It must be defined in the `.env` file.

The faucet endpoint is developed in [this repository](https://github.com/linhntaim/ethereum-simple-faucet-endpoint).

### Contract address

The contract address which manages the fund on the EVM-compatible blockchain is an environment variable created in the following format:

```
VUE_APP_FAUCET_CONTRACT_ADDRESS_{chain_id}={address}
```

- `chain_id`: The ID of the chain in decimal (eg. Ethereum ID = 1, ..). See https://chainlist.org/.
- `address`: The address of the contract on the chain.

It must be defined in the `.env` file.
