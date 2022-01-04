import React, { useEffect, useState } from 'react'
import DownloadNftComp from 'src/containers/download'
import {
	CONTRACT_ABI_URL,
	CONTRACT_ADDRESS,
  } from "src/utils/constants";
  import axios from "axios";
import Box from 'src/components/Box';

const index = () => {
    const [abi, setAbi] = useState<any>()
    const getContract = async () => {
        const abi = await axios(CONTRACT_ABI_URL);
        setAbi(JSON.parse(abi.data.result));
      };

      
      useEffect(() => {
        getContract() 
      }, [])
    return (
       <Box>
           {abi? <DownloadNftComp abi={abi} /> : ""}
       </Box>
    )
}

export default index