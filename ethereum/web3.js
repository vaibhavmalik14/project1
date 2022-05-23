import Web3 from "web3";

let web3;

if (
  typeof window !== "undefined" &&
  (typeof window.ethereum !== "undefined" || typeof window.web3 !== "undefined")
) {
  if (typeof window.ethereum !== "undefined") {
    // Ethereum user detected. Let's use the injected provider.
    web3 = new Web3(window.ethereum);

    if (typeof window.ethereum.autoRefreshOnNetworkChange !== "undefined") {
      window.ethereum.autoRefreshOnNetworkChange = false;
    }

    window.ethereum.on("chainChanged", () => {
      document.location.reload();
    });
    window.ethereum
      .enable()
      .then(_accounts => {
      })
      .catch(function(error) {
        console.error(error);
        alert(
          "Sorry, this application requires user approval to function correctly."
        );
      });
  } else {
    web3 = new Web3(window.web3.currentProvider);
  }
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/103b800ab3a64b9f94500919bbaeb94a"
  );

  web3 = new Web3(provider);
}

export default web3;
