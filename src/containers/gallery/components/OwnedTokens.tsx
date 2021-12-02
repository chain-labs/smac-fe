import React from "react";
import Box from "src/components/Box";
import Image from "next/image";

const OwnedTokenComp = () => {
	return (
		<Box
			display="flex"
			ml="14rem"
			mr="22.4rem"
			my="6.5rem"
			justifyContent="space-evenly"
		>
			<Box
				as="img"
				src="/static/images/Nft1.png"
				height="196px"
				width="196px"
				mr="12px"
			></Box>
			<Box
				as="img"
				src="/static/images/Nft1.png"
				height="196px"
				width="196px"
				mr="12px"
			></Box>
			<Box
				as="img"
				src="/static/images/Nft1.png"
				height="196px"
				width="196px"
				mr="12px"
			></Box>
			<Box
				as="img"
				src="/static/images/Nft1.png"
				height="196px"
				width="196px"
				mr="12px"
			></Box>
		</Box>
	);
};

export default OwnedTokenComp;
