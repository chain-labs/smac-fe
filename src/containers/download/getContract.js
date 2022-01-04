import axios from "axios";
import {
	CONTRACT_ABI_URL,
	CONTRACT_ADDRESS,
  } from "src/utils/constants";

const getContract = async () => {
  const abi = await axios(CONTRACT_ABI_URL);
  
  // setAbi(JSON.parse(abi.data.result));
  return (JSON.parse(abi.data.result))
};

export default getContract;