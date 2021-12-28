import React, { useContext, useEffect, useState } from "react";
import Box from "src/components/Box";
import Navbar from "src/components/Navbar";
import Text from "src/components/Text";
import Image from "next/image";
import useSigner from "src/ethereum/useSigner";
import useListeners from "src/ethereum/useListeners";
import { StatesContext } from "../../components/StatesContext";
import useEthers from "src/ethereum/useEthers";
import useContract from "src/ethereum/useContract";
import {
	CONTRACT_ABI_URL,
	CONTRACT_POLYGON_ADDRESS,
  } from "src/utils/constants";
  import axios from "axios";
  import getContract from "./getContract"



const DownloadNftComp = () => {
	const [arr, setArr] = useState([...Array(5)].map((_, i) => i + 1));
    const [ownerAddress, setOwnerAddress] = useState<string>("");
    const [provider, setProvider, ethers] = useEthers();
	const [signer, setSigner] = useSigner(provider);
	const state = useContext(StatesContext);
    const [abi, setAbi] = useState();
    const [projectURI, setProjectURI] = useState<string>("")
	const [baseId, setBaseId] = useState<string>("")
    const [ownerTokens, setOwnerTokens] = useState([]);
    const SMAC = useContract(CONTRACT_POLYGON_ADDRESS, getContract(), state.provider);



    
    
	const toDataURL = (url) => {
		return fetch(url)
			.then((response) => {
				return response.blob();
			})
			.then((blob) => {
				return URL.createObjectURL(blob);
			});
	};

    // const getContract = async () => {
	// 	const abi = await axios(CONTRACT_ABI_URL);
	// 	console.log(abi);
	// 	console.log({ CONTRACT_POLYGON_ADDRESS });
	
	// 	setAbi(JSON.parse(abi.data.result));
    //     return (JSON.parse(abi.data.result))
	//   };
	
	  useEffect(() => {
		getContract();
	  }, []);

    useListeners(provider, setProvider, setSigner);

    useEffect(() => {
		state.setProvider(provider);
		state.setSigner(signer);
		const getAddress = async () => {
			try {
				const address = await signer?.getAddress();
				console.log(typeof address)
				setOwnerAddress(address);
			} catch (err) {
				console.log(err);
			}
		};
		getAddress();
	}, [signer, provider]);

    useEffect(() => {
		console.log(SMAC);
		const ownerTokens = [];
		const getTokens = async () => {
			try {
				const projectURI = await SMAC.callStatic.projectURI();
				const myTokens = await SMAC.callStatic.getAllTokensOfOwner(ownerAddress)
				myTokens.map(c=>{
					ownerTokens.push(parseInt(c))
				})
				console.log(ownerTokens)
				setOwnerTokens(ownerTokens)
				console.log(projectURI);
				setProjectURI(projectURI)
			} catch (e) {
				console.log(e);
			}
		};
		getTokens();
	}, [SMAC]);

	const downloadAll = async () => {
		if (process.browser) {
			arr.forEach((c) => {
				const url = `static/images/Nft-${c}.png`;
				const name = `Nft-${c}`;
				fetch(url)
					.then((resp) => resp.blob())
					.then((blob) => {
						const url = window.URL.createObjectURL(blob);
						const a = document.createElement("a");
						a.style.display = "none";
						a.href = url;
						// the filename you want
						a.download = name;
						document.body.appendChild(a);
						a.click();
						window.URL.revokeObjectURL(url);
					})
					.catch(() => alert("An error sorry"));
			});
		}
	};

    useEffect(() => {
		getTokenURI();
	}, [projectURI])

	const getTokenURI = async() =>{
		if(projectURI!=""){
			const link = projectURI.slice(7,projectURI.length-1)
			const res = await axios.get(`https://ipfs.io/ipfs/${link}/1.json`);
			console.log(res.data.image.slice(7,res.data.image.length-5));
			setBaseId(res.data.image.slice(7,res.data.image.length-5))
		}
	}

	return (
		<Box bg="black-10" minHeight="100vh">
			<Box mb="9.8rem">
				<Navbar />
			</Box>
			<Box ml={{ tabS: "14rem", deskL: "21rem" }}>
				<Box mb="4.8rem">
					<Text as="h2" color="red-10" mb="2.6rem">
						Welcome to Space Man Astro Club!{" "}
					</Text>
					<Text as="b1" color="white-10">
						Here are your tokens :
					</Text>
				</Box>
				<Box
					as="button"
					px="4.7rem"
					py="2.3rem"
					bg="red-10"
					borderRadius="8px"
					border="none"
					cursor="pointer"
					onClick={() => {
						downloadAll();
					}}
				>
					<Text as="b1" color="white-10">
						Download All
					</Text>
				</Box>
				<Box display="flex" flexWrap="wrap" width="90%" mt="7.1rem">
					{baseId && ownerTokens?.map((_, i) => (
						<Box
							key={i*i}
							mb="2.4rem"
							mr="mxl"
							position="relative"
							height={{ tabS: "56.8rem", deskL: "60.6rem" }}
							width={{ tabS: "56.8rem", deskL: "60.6rem" }}
						>
							<Image src={`/static/images/Nft-${arr[i]}.png`} layout="fill" />
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default DownloadNftComp;