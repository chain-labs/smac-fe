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
import { CONTRACT_ADDRESS } from "src/utils/constants";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

const DownloadNftComp = ({ abi }) => {
	const [arr, setArr] = useState([...Array(5)].map((_, i) => i + 1));
	const [ownerAddress, setOwnerAddress] = useState<string>("");
	const [provider, setProvider, ethers] = useEthers();
	const [signer, setSigner] = useSigner(provider);
	const state = useContext(StatesContext);
	const [projectURI, setProjectURI] = useState<string>("");
	const [baseId, setBaseId] = useState<string>("");
	const [ownerTokens, setOwnerTokens] = useState([]);
	const SMAC = useContract(CONTRACT_ADDRESS, abi, state.provider);
	const [downloading, setDownloading] = useState<boolean>(false);
	const router = useRouter();
	const [loadingURI, setLoadingURI] = useState<string>("");
	const [format, setFormat] = useState<string>("");

	useListeners(provider, setProvider, setSigner);

	useEffect(() => {
		state.setProvider(provider);
		state.setSigner(signer);
		const getAddress = async () => {
			try {
				const address = await signer?.getAddress();
				setOwnerAddress(address);
			} catch (err) {
				console.log(err);
			}
		};
		getAddress();
	}, [signer, provider]);

	useEffect(() => {
		const ownerTokens = [];
		const getTokens = async () => {
			try {
				const projectURI = await SMAC.callStatic.projectURI();
				const loadingURI = await SMAC.callStatic.loadingURI();
				const myTokens = await SMAC.callStatic.getAllTokensOfOwner(
					ownerAddress
				);
				myTokens.map((c) => {
					ownerTokens.push(parseInt(c));
				});
				setOwnerTokens(ownerTokens);
				setProjectURI(projectURI);
				setLoadingURI(loadingURI);
			} catch (e) {
				console.log(e);
			}
		};
		getTokens();
	}, [SMAC, ownerAddress]);

	const downloadAll = async () => {
		setDownloading(true);
		if (process.browser) {
			baseId &&
				ownerTokens?.forEach((c) => {
					const url = `https://nftfy.mypinata.cloud/ipfs/${baseId}${c}.png`;
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
							setDownloading(false);
						})
						.catch(() => alert("An error sorry"));
				});
		}
	};

	useEffect(() => {
		getTokenURI();
	}, [projectURI]);

	const getTokenURI = async () => {
		if (SMAC) {
			const tokenURI = await SMAC.callStatic.tokenURI(ownerTokens[0]);
			const link = tokenURI.slice(7);
			const res = await axios.get(`https://nftfy.mypinata.cloud/ipfs/${link}`);
			setBaseId(res.data.image.slice(7, res.data.image.length - 5));
			setFormat(res.data.image.slice(-3));
		}
	};

	return (
		<Box bg="black-10" minHeight="100vh">
			<Box mb="3.8rem">
				<Navbar />
			</Box>
			<Box ml={{ tabS: "14rem", deskL: "21rem" }} mx="mxl">
				<Box mb="4.8rem">
					<Text as="h2" color="red-10" mb="2.6rem">
						Welcome to Space Man Astro Club!{" "}
					</Text>
					<Text as="b1" color="white-10" display={{ mobS: "none", deskM: "flex" }}>
						{ownerTokens.length != 0
							? projectURI != ""
								? "Here are your tokens:"
								: "Tokens Will be revealed soon"
							: "You have not bought any spaceman click on the button below to buy spacemen"}
					</Text>
					<Text as="b1" color="white-10" display={{ mobS: "flex", deskM: "none" }}>
						Please use your laptop to download your tokens.
					</Text>
				</Box>
				<Box >
					
				</Box>
				{ownerTokens.length != 0 ? (
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
							{downloading ? "Downloading" : "Download All"}
						</Text>
					</Box>
				) : (
					<Box
						as="button"
						px="4.7rem"
						py="2.3rem"
						bg="red-10"
						borderRadius="8px"
						border="none"
						cursor="pointer"
						onClick={() => {
							router.push("/");
						}}
					>
						<Text as="b1" color="white-10">
							Buy Spacemen
						</Text>
					</Box>
				)}
				<Box display="flex" flexWrap="wrap" width="90%" mt="7.1rem">
					{baseId &&
						ownerTokens?.map((_, i) => (
							<Box
								key={i * i}
								mb="2.4rem"
								mr="mxl"
								position="relative"
								height={{ tabS: "35.8rem", deskL: "40.6rem" }}
								width={{ tabS: "35.8rem", deskL: "40.6rem" }}
							>
								<Image
									src={`https://nftfy.mypinata.cloud/ipfs/${baseId}${ownerTokens[i]}.${format}`}
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
