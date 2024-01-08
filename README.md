# web3contract

Chain tools, contract interaction etc.

## Setup

You need install `git`, `node.js` first, and node version >= 14.

```shell
git clone https://github.com/onchainsig/web3contract.git

cd web3contract
npm install

npx hardhat compile
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
DEFAULT_PRIVATE_KEY=<your imported wallet private key>
DEFAULT_PRIVATE_KEY_ADDRESS=<your imported wallet address>
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
event or function signature: transfer(address,uint256) 
id: 0xa9059cbb2ab09eb219583f4a59a5d0623ade346d962bcd4e46b11da047c9049b 
selector: 0xa9059cbb
```

- accounts

```shell
$ npx hardhat accounts --help
Usage: hardhat [GLOBAL OPTIONS] accounts

accounts: Prints the list of accounts

$ npx hardhat accounts --network goerli
$ npx hardhat accounts
```

- balance

```shell
$ npx hardhat balance --help
Usage: hardhat [GLOBAL OPTIONS] balance --account <STRING>

OPTIONS:

  --account     The account's address 

balance: Prints an account's balance

$ npx hardhat balance --network goerli --account 0xC15f02ddbcD8ECe0E6Aee452370b15516D658D0c
$ npx hardhat balance --network bsctest --account 0xC15f02ddbcD8ECe0E6Aee452370b15516D658D0c
```

- 20transfer

```shell
$ npx hardhat 20transfer --help
Usage: hardhat [GLOBAL OPTIONS] erc20transfer --contract <STRING> to amount

OPTIONS:

  --account     The account number, default 0 
  --contract    The contract 

POSITIONAL ARGUMENTS:

  to    
  amount

erc20transfer: Transfer erc20 tokens

$ npx hardhat 20transfer --contract 0x90Ddc52fE6b98E07C30373C8c61037FBedDabcbB --network goerli 0x9e8ad8877c190ec99CFa11365d947b604c6c4e83 100000
```

- 20approve

```shell
Usage: hardhat [GLOBAL OPTIONS] 20approve [--account <STRING>] --contract <STRING> spender value

OPTIONS:

  --account     The account number, default 0 
  --contract    The contract 

POSITIONAL ARGUMENTS:

  spender
  value  

20approve: Approval erc20 tokens

$ npx hardhat 20approve --contract 0x0CdD07A264f27Ca09Db4f9FdF65309b17f0Fb584 --network mumbai 0x9e8ad8877c190ec99CFa11365d947b604c6c4e83 200001
$ npx hardhat 20approve --contract 0x0CdD07A264f27Ca09Db4f9FdF65309b17f0Fb584 --network mumbai --account 0 0x9e8ad8877c190ec99CFa11365d947b604c6c4e83 200001
```

- 20allowance

```shell
Usage: hardhat [GLOBAL OPTIONS] 20allowance [--account <STRING>] --contract <STRING> owner spender

OPTIONS:

  --account     The account number, default 0 
  --contract    The contract 

POSITIONAL ARGUMENTS:

  owner  
  spender

20allowance: Allowance erc20 tokens

$ npx hardhat 20allowance --contract 0x90Ddc52fE6b98E07C30373C8c61037FBedDabcbB --network goerli 0x9e8ad8877c190ec99CFa11365d947b604c6c4e83 0x715d99480b77a8d9d603638e593a539e21345fdf
$ npx hardhat 20allowance --contract 0x90Ddc52fE6b98E07C30373C8c61037FBedDabcbB --network goerli --acount 0 0x9e8ad8877c190ec99CFa11365d947b604c6c4e83 0x715d99480b77a8d9d603638e593a539e21345fdf
```

### Scripts

todo

## Contrbution

@onchainsig, @shaohan.niu

## References

- [Hardhat](https://hardhat.org/)

## License

[Apache License 2.0](LICENSE)
