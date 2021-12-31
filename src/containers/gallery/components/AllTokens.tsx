import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Box from "src/components/Box";
import Image from "next/image";
import useContract from "src/ethereum/useContract";
import { StatesContext } from "src/components/StatesContext";
import { CONTRACT_ADDRESS } from "src/utils/constants";


const AllTokens = ({ abi }) => {
	const [left, setLeft] = useState<string>("23rem");
	const state = useContext(StatesContext);
	const SMAC = useContract(CONTRACT_ADDRESS, abi, state.provider);
	const [allTokens, setAllTokens] = useState([]);
	const [format, setFormat] = useState<string>("")
	const [projectURI, setProjectURI] = useState<string>("");
	const [baseId, setBaseId] = useState<string>("");

	useEffect(() => {
		console.log(SMAC);
		const ownerTokens = [];
		const getTokens = async () => {
			try {
				const projectURI = await SMAC.callStatic.projectURI();
				const tokensCount = await SMAC.callStatic.tokensCount(
				);
				
				console.log(parseInt(tokensCount));
				setAllTokens([...Array(parseInt(tokensCount))].map((_, i) => i + 1));
				console.log(projectURI);
				setProjectURI(projectURI);
			} catch (e) {
				console.log(e);
			}
		};
		getTokens();
	}, [SMAC]);

	useEffect(() => {
		getTokenURI();
	}, [projectURI]);

	const getTokenURI = async () => {
		if (SMAC) {
			const tokenURI = await SMAC.callStatic.tokenURI(allTokens[0]);
			const link = tokenURI.slice(7);
			const res = await axios.get(`https://nftfy.mypinata.cloud/ipfs/${link}`);
			setBaseId(res.data.image.slice(7, res.data.image.length - 5));
			setFormat(res.data.image.slice(-3));
		}
	};

	return (
		<Box top="5rem" ml={{mobS:"0",tabS:`${left}`}} >
			<Box
				id="scroll"
				overflowX="scroll"
				scrollBehavior="smooth"
				onScroll={() => {
					setLeft("0");
				}}
				css={`
					::-webkit-scrollbar {
						display: none;
					}
				`}
			>
				<Box display="flex" flexWrap="wrap" width={{mobS:"120%",tabS:"210rem"}}>
					{allTokens?.map((_, i) => (
						<Box mt="3rem">
							<Box
								mr="mxl"
								position="relative"
								height={{ mobS: "12rem", tabS: "19.6rem", deskL: "23rem" }}
								width={{ mobS: "12rem", tabS: "19.6rem", deskL: "23rem" }}
							>
								<Image
								src={`https://nftfy.mypinata.cloud/ipfs/${baseId}${allTokens[i]}.${format}`}
								layout="fill"
							/>{" "}
							</Box>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default AllTokens;