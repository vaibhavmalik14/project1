import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xB26828aFCf001682281B40a02CF73fB5FEe69cE4"
);

export default instance;
