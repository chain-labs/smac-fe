import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Box from "src/components/Box";
import Image from "next/image";
import useContract from "src/ethereum/useContract";
import { CONTRACT_ADDRESS } from "src/utils/constants";

import { StatesContext } from "src/components/StatesContext";
import Text from "src/components/Text";

const OwnedTokenComp = ({ abi, ownerAddress }) => {
	const [arr, setArr] = useState([...Array(6)].map((_, i) => i + 1));
	const state = useContext(StatesContext);
	const SMAC = useContract(CONTRACT_ADDRESS, abi, state.provider);
	const [ownerTokens, setOwnerTokens] = useState([]);
	const [projectURI, setProjectURI] = useState<string>("");
	const [baseId, setBaseId] = useState<string>("");
	const [loadingURI, setLoadingURI] = useState<string>("");
	const [format, setFormat] = useState<string>("");

	useEffect(() => {
		console.log(SMAC);
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
				console.log(ownerTokens);
				setOwnerTokens(ownerTokens);
				console.log(projectURI);
				setProjectURI(projectURI);
				setLoadingURI(loadingURI);
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
			const tokenURI = await SMAC.callStatic.tokenURI(ownerTokens[0]);
			const link = tokenURI.slice(7);
			const res = await axios.get(`https://nftfy.mypinata.cloud/ipfs/${link}`);
			setBaseId(res.data.image.slice(7, res.data.image.length - 5));
			setFormat(res.data.image.slice(-3));
		}
	};

	return (
		<Box display="flex" ml="16rem" flexWrap="wrap">
			{baseId &&
				ownerTokens?.map((_, i) => (
					<Box mt="3rem" key={i * i}>
						<Box
							mb="2rem"
							mr="mxl"
							backgroundColor="white"
							position="relative"
							height={{ tabS: "19.6rem", deskL: "23rem" }}
							width={{ tabS: "19.6rem", deskL: "23rem" }}
						>
							<Image
								src={`https://nftfy.mypinata.cloud/ipfs/${baseId}${ownerTokens[i]}.${format}`}
								layout="fill"
							/>{" "}
						</Box>
					</Box>
				))}
		</Box>
	);
};

export default OwnedTokenComp;
