import React, { useState } from "react";
import Box from "src/components/Box";
import Navbar from "src/components/Navbar";
import HorizontalScroll from "react-scroll-horizontal";
import Text from "src/components/Text";
import OwnedTokenComp from "./components/OwnedTokens";
import If from "src/components/If";
import AllTokens from "./components/AllTokens";

const GalleryPageComp = () => {
    const [allSpaceMen, setAllSpaceMen] = useState<boolean>(true)
	const child = {
		width: `25em`,
		height: `100%`,
		color: "white",
		margin: `2rem`,
	};
    const arr = ["Nft1","Nft2","Nft3","Nft4","Nft5","Nft6","Nft7"]
	return (
		<Box
			backgroundColor="main-black"
			width="100vw"
			height="100vh"
			overflowY="hidden"
		>
			<Box>
				<Navbar />
			</Box>
			<Box ml="23rem">
                <Text as="s2" color="white-10" mr="64px" cursor="pointer" onClick={()=>setAllSpaceMen(true)}>All SpaceMen</Text>
                <Text as="s2" color="white-10" cursor="pointer" onClick={()=>setAllSpaceMen(false)}>Owned</Text>
            </Box>
            {/* <OwnedTokenComp/> */}
            <If 
            condition={allSpaceMen}
            then={
                <AllTokens/>
            }
            else={
                <OwnedTokenComp/>
            }
            
            />
			
		</Box>
	);
};

export default GalleryPageComp;
