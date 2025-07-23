import { ethers } from "ethers";
import fs from "fs-extra";
import "dotenv/config";

async function main() {
  try {
    const { INFURA_ID } = process.env;
    const provider = new ethers.JsonRpcProvider(
      `https://sepolia.infura.io/v3/${INFURA_ID}`
    );
    const { PRIVATE_KEY } = process.env;
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    const abi = fs.readFileSync(
      "./SimpleStorage_sol_SimpleStorage.abi",
      "utf8"
    );
    const binary = fs.readFileSync(
      "./SimpleStorage_sol_SimpleStorage.bin",
      "utf8"
    );
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    const contract = await contractFactory.deploy();
    await contract.deploymentTransaction()?.wait(1);
    const currentBigNumber = await contract.retrieve();
    console.log(currentBigNumber.toString());
    console.log(typeof currentBigNumber);
  } catch (error) {
    console.error("error caught:", error);
    process.exit(1);
  }
}

main();
