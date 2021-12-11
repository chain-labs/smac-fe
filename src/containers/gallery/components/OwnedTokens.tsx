import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Box from "src/components/Box";
import Image from "next/image";
import useContract from "src/ethereum/useContract";
import { StatesContext } from "src/components/StatesContext";
import useCustomContract from "src/ethereum/useCustomContract";
import Text from "src/components/Text";

const OwnedTokenComp = ({ cid, ownerAddress }) => {
	const [arr, setArr] = useState([...Array(6)].map((_, i) => i + 1));
	const state = useContext(StatesContext);
	const Collection = useCustomContract("Collection", cid, state.provider);
	const [ownerTokens, setOwnerTokens] = useState([]);

	const [projectURI, setProjectURI] = useState<string>("")
	const [baseId, setBaseId] = useState<string>("")

	useEffect(() => {
		console.log(Collection);
		const ownerTokens = [];
		const getTokens = async () => {
			try {
				const projectURI = await Collection.callStatic.projectURI();
				const myTokens = await Collection.callStatic.getAllTokensOfOwner(ownerAddress)
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
	}, [cid,Collection]);

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
		<Box display="flex" ml="23rem">
			{ baseId && ownerTokens?.map((_, i) => (
				<Box mt="3rem" key={i*i}>
					<Box
						mb="2rem"
						mr="mxl"
						backgroundColor="white"
						position="relative"
						height={{ tabS: "19.6rem", deskL: "23rem" }}
						width={{ tabS: "19.6rem", deskL: "23rem" }}
					>
						<Image src={`https://ipfs.io/ipfs/${baseId}${ownerTokens[i]}.png`} layout="fill" />
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default OwnedTokenComp;
