export const PINATA_KEY = process.env.NEXT_PUBLIC_IPFS_API_PINATA_KEY;
export const PINATA_KEY_SECRET = process.env.NEXT_PUBLIC_IPFS_PINATA_API_SECRET;

export const PINATA_URL = "https://api.pinata.cloud/";

export const CONTRACT_POLYGON_ADDRESS =
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const CONTRACT_ABI_URL_POLYGON =
  "https://api.polygonscan.com/api?module=contract&action=getabi&address=0x8F0C4A7044188a59eb89e6bdE8f27e2f8E0A46d5&apikey=P7DI6NDJDNR5EXYEAR4NPI8EJNQH2HXSME";

export const CONTRACT_ABI_URL = `https://api.polygonscan.com/api?module=contract&action=getabi&address=${CONTRACT_POLYGON_ADDRESS}&apikey=${API_KEY}`;
