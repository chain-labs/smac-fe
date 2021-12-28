import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Box from "src/components/Box";
import Image from "next/image";
import useContract from "src/ethereum/useContract";
import { StatesContext } from "src/components/StatesContext";
import Text from "src/components/Text";
import { CONTRACT_POLYGON_ADDRESS } from "src/utils/constants";


const AllTokens = ({ abi }) => {
	const [arr, setArr] = useState([...Array(18)].map((_, i) => i + 1));
	const [left, setLeft] = useState<string>("23rem");
	const state = useContext(StatesContext);
	const SMAC = useContract(CONTRACT_POLYGON_ADDRESS, abi, state.provider);
	const [allTokens, setAllTokens] = useState([]);

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
		if (projectURI != "") {
			const link = projectURI.slice(7, projectURI.length - 1);
			const res = await axios.get(`https://ipfs.io/ipfs/${link}/1.json`);
			console.log(res.data.image.slice(7, res.data.image.length - 5));
			setBaseId(res.data.image.slice(7, res.data.image.length - 5));
		}
	};

	return (
		<Box top="5rem" ml={left}>
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
				<Box display="flex" flexWrap="wrap" width="220rem">
					{allTokens?.map((_, i) => (
						<Box mt="3rem">
							<Box
								mr="mxl"
								position="relative"
								height={{ mobS: "12rem", tabS: "19.6rem", deskL: "23rem" }}
								width={{ mobS: "12rem", tabS: "19.6rem", deskL: "23rem" }}
							>
								<Image
									src={`https://ipfs.io/ipfs/${baseId}/${allTokens[i]}.png`}
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