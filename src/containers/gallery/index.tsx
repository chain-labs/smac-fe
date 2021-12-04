import React, { useState } from "react";
import Box from "src/components/Box";
import Navbar from "src/components/Navbar";
import Text from "src/components/Text";
import OwnedTokenComp from "./components/OwnedTokens";
import If from "src/components/If";
import AllTokens from "./components/AllTokens";
import Container from "src/components/Container";

const GalleryPageComp = () => {
	const [allSpaceMen, setAllSpaceMen] = useState<boolean>(true);
	const child = {
		width: `25em`,
		height: `100%`,
		color: "white",
		margin: `2rem`,
	};
	return (
		<Box bg="main-black" width="100vw" minHeight="100vh">
			<Box>
				<Navbar />
			</Box>
			<Box ml="23rem">
				<Text
					id="all-spacemen"
					as="s2"
					color="white-10"
					mr="64px"
					cursor="pointer"
					borderBottom="2px solid white"
					py="mxxs"
					onClick={() => {
						setAllSpaceMen(true);
						document.getElementById("owned").style.color =
							"rgba(255, 255, 255, 0.6)";
						document.getElementById("all-spacemen").style.color = "white";
						document.getElementById("all-spacemen").style.borderBottom =
							"2px solid white";
						document.getElementById("owned").style.borderBottom = "none";
					}}
				>
					All SpaceMen
				</Text>
				<Text
					id="owned"
					as="s2"
					color="rgba(255, 255, 255, 0.6)"
					cursor="pointer"
					py="mxxs"
					onClick={() => {
						setAllSpaceMen(false);
						document.getElementById("all-spacemen").style.color =
							"rgba(255, 255, 255, 0.6)";
						document.getElementById("owned").style.color = "white";
						document.getElementById("owned").style.borderBottom =
							"2px solid white";
						document.getElementById("all-spacemen").style.borderBottom = "none";
					}}
				>
					Owned
				</Text>
			</Box>
			<Box>
				<If
					condition={allSpaceMen}
					then={<AllTokens />}
					else={<OwnedTokenComp />}
				/>
			</Box>
		</Box>
	);
};

export default GalleryPageComp;
