import "./styles.css";
/// You can use either one of the following imports:
import Web3 from "web3";
//import { ethers } from "ethers";

/// Contains needed settings, as nodeUrl, contractAddress, and abi
import { settings } from "./settings";

/// This is a definition of the type of object returned by the contract
/// and is what the addProposalToList function expects as input parameter
import { Proposal } from "./Proposal";

/// Allows to add a proposal to the list
import { addProposalToList } from "./utils";

/// Empties the list
import { resetList } from "./utils";

/// Set the app loading status to true or false
import { setLoading } from "./utils";

const main = async () => {
  setLoading(true);

  const web3 = new Web3(settings.nodeUrl);
  const contract = new web3.eth.Contract(settings.contractAbi, settings.contractAddress);

  resetList();

  const proposalsCount = await contract.methods.getProposalsCount().call();
  for (let i = 0; i < proposalsCount; i++) {
    const proposal = await contract.methods.proposals(i).call();
    addProposalToList({
      name: proposal[0],
      voteCount: proposal[1]
    });
  }

  setLoading(false);
};

main();
