import React, { useState } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import Box from "src/components/Box";
import Image from "next/image";

const AllTokens = () => {
	const [arr, setArr] = useState([...Array(10)].map((_, i) => i + 1));
	const [left, setLeft] = useState<string>("23rem");
	return (
		<Box top="5rem" ml={left} overflow="hidden">
			<Box
				id="scroll"
				overflowX="scroll"
				onScroll={() => {
					setLeft("0");
				}}
				css={`
				&::-webkit-scrollbar-track:{
					display:none
				}
				`}
			>
				<Box display="flex" justifyContent="space-around" mb="2.4rem">
					{arr.map((_, i) => (
						<Box mt="3rem">
							<Box mb="2rem"
								mr="mxl"
								position="relative"
								height={{ tabS: "12rem", deskL: "21rem" }}
								width={{ tabS: "12rem", deskL: "21rem" }}
							>
								<Image src={`/static/images/Nft-${arr[i]}.png`} layout="fill" />
							</Box>
							<Box mb="2rem"
								mr="mxl"
								position="relative"
								height={{ tabS: "12rem", deskL: "21rem" }}
								width={{ tabS: "12rem", deskL: "21rem" }}
							>
								<Image src={`/static/images/Nft-${arr[i]}.png`} layout="fill" />
							</Box><Box
								mr="mxl"
								position="relative"
								height={{ tabS: "12rem", deskL: "21rem" }}
								width={{ tabS: "12rem", deskL: "21rem" }}
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
