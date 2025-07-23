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
    //contract deployment
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    const contract = await contractFactory.deploy();
    const deploymentReceipt = await contract.deploymentTransaction()?.wait(1); //wait one block
    console.log(deploymentReceipt);

    //contract abi(store) call
    const storeBigNumber = await contract.store(206);
    await storeBigNumber.wait(1); // wait one block

    //contract abi(retrieve) call
    const retrieveBigNumber = await contract.retrieve();
    console.log(`Stored bigNumber is: ${retrieveBigNumber}`);

    //contract abi(addPerson) call
    const person = await contract.addPerson(206, "Ndubuisi");
    await person.wait(1); // wait one block

    //contract abi(retrievePerson) call
    const personRetrieved = await contract.retrievePerson(0);
    console.log(`The person retrieved is: ${personRetrieved}`);
  } catch (error) {
    console.error("error caught:", error);
    process.exit(1);
  }
}

main();
