export const PINATA_KEY = process.env.NEXT_PUBLIC_IPFS_API_PINATA_KEY;
export const PINATA_KEY_SECRET = process.env.NEXT_PUBLIC_IPFS_PINATA_API_SECRET;

export const PINATA_URL = "https://api.pinata.cloud/";

// export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

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
  return networkUnits[network];
};

export const CONTRACT_ADDRESS = checkIfEnvDev()
  ? process.env.NEXT_PUBLIC_TEST_CONTRACT_ADDRESS
  : process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

export const CONTRACT_ABI_URL = `https://api.polygonscan.com/api?module=contract&action=getabi&address=${CONTRACT_ADDRESS}&apikey=P7DI6NDJDNR5EXYEAR4NPI8EJNQH2HXSME`;

export const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
