# SimpleStorage Smart Contract

This project demonstrates the use of a Solidity smart contract to store and retrieve structured data on the Ethereum blockchain using **Ethers.js** for interaction and **Solc** for compilation.

---

## 📝 Contract Summary

The `SimpleStorage` smart contract supports:

- Storing a `uint256` value on-chain
- Saving structured data (people with name + number)
- Mapping names to values
- Reading back stored and structured values

### 🔍 Contract Features

```solidity
uint256 public bigNumber;
struct People {
    uint256 bigNumber;
    string name;
}
People[] public people;
mapping(string => uint256) public nameToBigNumber;
function store(uint256 _bigNumber) public;
function retrieve() public view returns (uint256);
function addPerson(uint256 _bigNumber, string memory _name) public;
function retrievePerson(uint256 _index) public view returns (uint256, string memory);
```

```
git clone https://github.com/ndubuisi-ugwuja/simplestorage.git
cd simplestorage
```

⚙️ Setup Instructions

1. 📦 Install Dependencies

```
yarn install ethers fs-extra dotenv
or:
npm install ethers fs-extra dotenv
```

2. 📄 Create a .env File

Create a .env file in the root directory and add the following:

```
INFURA_ID=your_infura_project_id
PRIVATE_KEY=your_wallet_private_key
```

⚠️ Do not share your .env file or commit it to GitHub.

3. 🛠 Compile Your Contract

Use solc-js or your preferred compiler to generate:

    •	SimpleStorage_sol_SimpleStorage.abi
    •	SimpleStorage_sol_SimpleStorage.bin

Example with solc-js CLI:

```
npx solcjs --abi --bin --include-path node_modules/ --base-path . -o . SimpleStorage.sol
```

🚀 Deploy & Interact

Run the deploy script:

```
node deploy.js
```

🔧 What the Script Does:

    •	Reads ABI & Bytecode from compiled files
    •	Connects to Sepolia testnet via Infura
    •	Deploys the SimpleStorage contract
    •	Stores a number 206 using store()
    •	Retrieves the stored number using retrieve()
    •	Adds a person Ndubuisi with number 206 using addPerson()
    •	Retrieves that person using retrievePerson(0)

🧪 Sample Output

```
{
  ... // deployment receipt
}
Stored bigNumber is: 206
The person retrieved is: [ 206, 'Ndubuisi' ]
```

🔗 Tech Stack

    •	Solidity ^0.8.7
    •	Ethers.js v6
    •	Solc-js
    •	Infura – for Sepolia RPC access
    •	dotenv – for environment variables

📜 License

MIT License
