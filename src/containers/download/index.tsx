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
import { CONTRACT_POLYGON_ADDRESS } from "src/utils/constants";
import axios from "axios";

const DownloadNftComp = ({ abi }) => {
	const [arr, setArr] = useState([...Array(5)].map((_, i) => i + 1));
	const [ownerAddress, setOwnerAddress] = useState<string>("");
	const [provider, setProvider, ethers] = useEthers();
	const [signer, setSigner] = useSigner(provider);
	const state = useContext(StatesContext);
	const [projectURI, setProjectURI] = useState<string>("");
	const [baseId, setBaseId] = useState<string>("");
	const [ownerTokens, setOwnerTokens] = useState([]);
	const SMAC = useContract(CONTRACT_POLYGON_ADDRESS, abi, state.provider);

	useListeners(provider, setProvider, setSigner);

	useEffect(() => {
		state.setProvider(provider);
		state.setSigner(signer);
		const getAddress = async () => {
			try {
				const address = await signer?.getAddress();
				console.log(typeof address);
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
				const myTokens = await SMAC.callStatic.getAllTokensOfOwner(
					ownerAddress
				);
				myTokens.map((c) => {
					ownerTokens.push(parseInt(c));
				});
				console.log(ownerTokens);
				setOwnerTokens(ownerTokens);
				console.log(projectURI);
				setProjectURI(projectURI);
			} catch (e) {
				console.log(e);
			}
		};
		getTokens();
	}, [SMAC, ownerAddress]);

	const downloadAll = async () => {
		if (process.browser) {
			baseId &&
				ownerTokens?.forEach((c) => {
					const url = `https://ipfs.io/ipfs/${baseId}${c}.png`;
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
	}, [projectURI]);

	const getTokenURI = async () => {
		if (projectURI != "") {
			const link = projectURI.slice(7, projectURI.length - 1);
			const res = await axios.get(`https://ipfs.io/ipfs/${link}/1.json`);
			console.log(res.data.image.slice(7, res.data.image.length - 5));
			setBaseId(res.data.image.slice(7, res.data.image.length - 5));
		}
	};

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
					{baseId &&
						ownerTokens?.map((_, i) => (
							<Box
								key={i * i}
								mb="2.4rem"
								mr="mxl"
								position="relative"
								height={{ tabS: "56.8rem", deskL: "60.6rem" }}
								width={{ tabS: "56.8rem", deskL: "60.6rem" }}
							>
								<Image
									src={`https://ipfs.io/ipfs/${baseId}${ownerTokens[i]}.png`}
									layout="fill"
								/>
							</Box>
						))}
				</Box>
			</Box>
		</Box>
	);
};

export default DownloadNftComp;
