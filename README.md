# web3contract

Chain tools, contract interaction etc.

## Setup

```shell
git clone https://github.com/onchainsig/web3contract.git

cd web3contract
npm install
```

## Network

- Default built-in network: `hardhat`
- Hardhat node

```shell
# Start a local network
npx hardhat node

# Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/
```

Hardhat other ommands:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
npx hardhat run scripts/accounts.js --network goerli
```

## Private key

We can put the private key in the `.env` file, and **not commit it to the repository**. Any variable can be added.

```shell
INFURA_API_KEY=<your Infura Api Key>
GORELI_PRIVATE_KEY=<your imported wallet private key>
```

## Tasks & Scripts

### Tasks

- selector

```shell
$ npx hardhat selector --help
Usage: hardhat [GLOBAL OPTIONS] selector signature

POSITIONAL ARGUMENTS:

  signature

selector: Function selector for the given signature

$ npx hardhat selector "transfer(address,uint256)"
Function: transfer(address,uint256), id: 0xa9059cbb2ab09eb219583f4a59a5d0623ade346d962bcd4e46b11da047c9049b, selector: 0xa9059cbb
```

### Scripts

-

## Contrbution

@onchainsig, @shaohan.niu

## References

- [Hardhat](https://hardhat.org/)

## License

[Apache License 2.0](LICENSE)
