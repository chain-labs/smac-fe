import React, { useState } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import Box from "src/components/Box";
import Image from "next/image";

const AllTokens = () => {
	const [arr, setArr] = useState([...Array(10)].map((_, i) => i + 1));
	const [left, setLeft] = useState<string>("21rem");
	return (
		<Box top="5rem" ml={left} overflow="hidden" hideScrollBar>
			<Box
				id="scroll"
				overflowX="scroll"
				hideScrollBar
				onScroll={() => {
					setLeft("0");
				}}
			>
				<Box display="flex" justifyContent="space-around" mb="2.4rem">
					{arr.map((_, i) => (
						<Box 
						// width="19.6rem" height="19.6rem"
						>
							{/* <Image
								src={`/static/images/Nft-${arr[i]}.png`}
								layout="fill"
								/> */}
							<Box
								as="img"
								src={`/static/images/Nft-${arr[i]}.png`}
								height="150px"
								width="150px"
								mr="12px"
							></Box>
							<Box
								as="img"
								src={`/static/images/Nft-${arr[i]}.png`}
								height="150px"
								width="150px"
								mr="12px"
							></Box>
						</Box>
					))}
					{/* <Box as="img" src="/static/images/Nft-1.png" height="196px" width="196px" mr="12px"></Box>
                            <Box as="img" src="/static/images/Nft-1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft-1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft-1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft-1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft-1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft-1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft-1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft-1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft-1.png" height="196px" width="196px" mr="12px"></Box>
                            <Box as="img" src="/static/images/Nft-1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft-1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft-1.png" height="196px" width="196px" mr="12px"></Box> */}
				</Box>
			</Box>
		</Box>
	);
};

export default AllTokens;
