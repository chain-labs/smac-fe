import React, { useContext, useEffect, useState } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import Box from "src/components/Box";
import Image from "next/image";
import useContract from "src/ethereum/useContract";
import { StatesContext } from "src/components/StatesContext";


const AllTokens = ({cid}) => {
	const [arr, setArr] = useState([...Array(10)].map((_, i) => i + 1));
	const [left, setLeft] = useState<string>("23rem");
	const state = useContext(StatesContext);

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
				<Box display="flex" justifyContent="space-around" mb="2.4rem">
					{arr.map((_, i) => (
						<Box mt="3rem">
							<Box
								mb="2rem"
								mr="mxl"
								position="relative"
								height={{ mobS: "12rem", tabS:"19.6rem", deskL: "23rem" }}
								width={{ mobS: "12rem", tabS:"19.6rem", deskL: "23rem" }}
							>
								<Image src={`/static/images/Nft-${arr[i]}.png`} layout="fill" />
							</Box>
							<Box
								mb="2rem"
								mr="mxl"
								position="relative"
								height={{ mobS: "12rem", tabS:"19.6rem", deskL: "23rem" }}
								width={{ mobS: "12rem", tabS:"19.6rem", deskL: "23rem" }}
							>
								<Image src={`/static/images/Nft-${arr[i]}.png`} layout="fill" />
							</Box>
							<Box
								mr="mxl"
								position="relative"
								height={{ mobS: "12rem", tabS:"19.6rem", deskL: "23rem" }}
								width={{ mobS: "12rem", tabS:"19.6rem", deskL: "23rem" }}
							>
								<Image src={`/static/images/Nft-${arr[i]}.png`} layout="fill" />
							</Box>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default AllTokens;
