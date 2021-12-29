export const PINATA_KEY = process.env.NEXT_PUBLIC_IPFS_API_PINATA_KEY;
export const PINATA_KEY_SECRET = process.env.NEXT_PUBLIC_IPFS_PINATA_API_SECRET;

export const PINATA_URL = "https://api.pinata.cloud/";

// export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const CONTRACT_ABI_URL =
  "https://api.polygonscan.com/api?module=contract&action=getabi&address=0x8F0C4A7044188a59eb89e6bdE8f27e2f8E0A46d5&apikey=P7DI6NDJDNR5EXYEAR4NPI8EJNQH2HXSME";

// export const CONTRACT_ABI_URL = `https://api.polygonscan.com/api?module=contract&action=getabi&address=${CONTRACT_POLYGON_ADDRESS}&apikey=${API_KEY}`;

export const networkIds = {
  rinkeby: 4,
  mainnet: 1,
  polygon: 137,
  polygon_test: 80001,
};

export const networkUnits = {
  rinkeby: "ETH",
  mainnet: "ETH",
  polygon: "MATIC",
  polygon_test: "MATIC",
};

export const checkIfEnvDev = () =>
  !(process.env.NEXT_PUBLIC_IS_PRODUCTION === "true");

const getNetwork = () => {
  if (checkIfEnvDev()) {
    return process.env.NEXT_PUBLIC_TEST_NETWORK;
  } else {
    return process.env.NEXT_PUBLIC_NETWORK;
  }
};

export const checkNetwork = async (web3, network) => {
  const id = await web3.eth.net.getId();
  const reqdId = convertToNetworkId(network);

  return id === reqdId ? true : false;
};

export const convertToNetworkId = (network) => networkIds[network];

export const getUnit = () => {
  const network = getNetwork();
  console.log({ network, unit: networkUnits[network] });
  return networkUnits[network];
};

export const CONTRACT_ADDRESS = checkIfEnvDev
  ? process.env.NEXT_PUBLIC_TEST_CONTRACT_ADDRESS
  : process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
