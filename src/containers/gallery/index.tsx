import React, { useContext, useEffect, useState } from "react";
import Box from "src/components/Box";
import Navbar from "src/components/Navbar";
import Text from "src/components/Text";
import OwnedTokenComp from "./components/OwnedTokens";
import If from "src/components/If";
// import AllTokens from "./components/AllTokens";
import {
	CONTRACT_ABI_URL,
	CONTRACT_POLYGON_ADDRESS,
} from "src/utils/constants";
import axios from "axios";

import Container from "src/components/Container";
import useSigner from "src/ethereum/useSigner";
import useListeners from "src/ethereum/useListeners";
import { StatesContext } from "../../components/StatesContext";
import useEthers from "src/ethereum/useEthers";
import useContract from "src/ethereum/useContract";
import AllTokens from "./components/AllTokens";
import { setHttpAgentOptions } from "next/dist/server/config";

const GalleryPageComp = () => {
	const [allSpaceMen, setAllSpaceMen] = useState<boolean>(true);
	const [provider, setProvider, ethers] = useEthers();
	const [signer, setSigner] = useSigner(provider);
	const [ownerAddress, setOwnerAddress] = useState<string>("");
	const state = useContext(StatesContext);
	const [abi, setAbi] = useState();
	const SMAC = useContract(CONTRACT_POLYGON_ADDRESS, abi, state.provider);

	const getSpacemenStyle = () => {
		setAllSpaceMen(true);
	};

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

	const getContract = async () => {
		const abi = await axios(CONTRACT_ABI_URL);
		console.log(abi);
		console.log({ CONTRACT_POLYGON_ADDRESS });

		setAbi(JSON.parse(abi.data.result));
	};

	useEffect(() => {
		getContract();
	}, []);

	return (
		<Box bg="black-10" width="100vw" minHeight="100vh">
			<Box>
				<Navbar />
			</Box>
			<Box ml={{mobS:"3rem",tabS:"16rem",deskL:"23rem"}} mt="3.4rem" overflow="hidden">
				<Text
					id="all-spacemen"
					as="s2"
					color="white-10"
					mr="64px"
					cursor="pointer"
					borderBottom={allSpaceMen ? "2px solid white" : "none"}
					//@ts-expect-error
					color={allSpaceMen ? "white" : "rgba(255, 255, 255, 0.6)"}
					onClick={() => {
						setAllSpaceMen(true);
					}}
				>
					All SpaceMen
				</Text>
				<Text
					id="owned"
					as="s2"
					color="rgba(255, 255, 255, 0.6)"
					cursor="pointer"
					borderBottom={allSpaceMen ? "none" : "2px solid white"}
					//@ts-expect-error
					color={allSpaceMen ? "rgba(255, 255, 255, 0.6)" : "white"}
					onClick={() => {
						setAllSpaceMen(false);
					}}
				>
					Owned
				</Text>
			</Box>
			<Box>
				<If
					condition={allSpaceMen}
					then={<AllTokens abi={abi} />}
					else={<OwnedTokenComp abi={abi} ownerAddress={ownerAddress} />}
				/>
			</Box>
		</Box>
	);
};

export default GalleryPageComp;
