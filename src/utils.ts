import { Proposal } from "./Proposal";

export const setLoading = (isLoading: boolean) => {
  const appElement = document.getElementById("app");
  if (appElement) {
    appElement.className = isLoading ? "isLoading" : "";
  }
};

/// Empties the list
export const resetList = () => {
  const containerElement = document.getElementById("proposals_container");
  if (containerElement) {
    containerElement.innerHTML = "";
  }
};

/// Adds a new proposal to the list
export const addProposalToList = (newProposal: Proposal) => {
  const containerElement = document.getElementById("proposals_container");
  if (containerElement) {
    containerElement.innerHTML += `<li>${newProposal.name}(votes: ${newProposal.voteCount})</li>`;
  }
};
