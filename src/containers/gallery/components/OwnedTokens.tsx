import React, { useState } from "react";
import Box from "src/components/Box";
import Image from "next/image";

const OwnedTokenComp = () => {
	const [arr, setArr] = useState([...Array(6)].map((_, i) => i + 1));

	return (
		<Box display="flex" ml="23rem">
			{arr.map((_, i) => (
				<Box mt="3rem">
					<Box
						mb="2rem"
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
	);
};

export default OwnedTokenComp;
