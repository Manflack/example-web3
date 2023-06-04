export const settings: {
  nodeUrl: string;
  contractAddress: string;
  contractAbi: any;
} = {
  nodeUrl: "https://goerli.infura.io/v3/1023bdbff41a4451a090ef94b5bc9552",
  contractAddress: "0xE99fc954B76C530504Cb1A863aeCd78FbE22Cd48",
  contractAbi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "name",
          type: "string"
        }
      ],
      name: "addProposal",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "getProposalsCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      name: "proposals",
      outputs: [
        {
          internalType: "string",
          name: "name",
          type: "string"
        },
        {
          internalType: "uint256",
          name: "voteCount",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "reset",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "proposal",
          type: "uint256"
        }
      ],
      name: "vote",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      name: "voters",
      outputs: [
        {
          internalType: "uint256",
          name: "lastRoundVoted",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "vote",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    }
  ]
};
