import Box from "src/components/Box";
import Image from "next/image";
import Text from "src/components/Text";
import { useEffect } from "react";
import theme from "src/styleguide/theme";

import { introAnimation, scrollBannerAnimation } from "./animations";

const HomeComp = () => {
	useEffect(() => {
		window.onload = () => {
			introAnimation();
		};
		scrollBannerAnimation();
	}, []);

	return (
		<Box>
			{/* <-------------BANNER BACKGROUND----------------> */}
			<Box
				height="100vh"
				width="100vw"
				bg="blue-10"
				zIndex={10}
				className="overlay"
				position="absolute"
				top="0"
			></Box>
			<Box
				width="100vw"
				height="100vh"
				position="fixed"
				top={{ mobS: 0, tabS: -10 }}
				zIndex={-1}
				className="banner"
			>
				<Box display={{ mobS: "none", deskL: "block" }}>
					<Image
						src="/static/images/banner.webp"
						alt="banner"
						height="9"
						width="16"
						layout="responsive"
						quality="1"
						priority
					></Image>
				</Box>
				<Box display={{ mobS: "block", deskL: "none" }}>
					<Image
						src="/static/images/banner.webp"
						alt="banner"
						height="25"
						width="16"
						layout="responsive"
						quality="1"
						priority
					></Image>
				</Box>
				<Box
					bg="black-10"
					opacity="50%"
					height="120vh"
					width="100vw"
					position="absolute"
					top="0"
					left="0"
				></Box>
			</Box>
			<Box
				position="absolute"
				top="10"
				left="50%"
				transform="translateX(-50%)"
				row
				center
				flexDirection={{ mobS: "column", deskS: "row" }}
			>
				<Box row>
					<Text fontSize="2rem" color="white-10" mr="2rem">
						About
					</Text>
					<Text fontSize="2rem" color="white-10" mr="2rem">
						Gallery
					</Text>
					<Text fontSize="2rem" color="white-10" mr={{deskS:"2rem"}}>
						Roadmap
					</Text>
				</Box>
				<Box
					borderRadius="50%"
					height="8rem"
					width="8rem"
					position="relative"
					overflow="hidden"
				>
					<Image src="/static/images/logo.jpeg" layout="fill" />
				</Box>
				<Box row>
					<Text fontSize="2rem" color="white-10" ml={{deskS:"2rem"}}>
						About
					</Text>
					<Text fontSize="2rem" color="white-10" ml="2rem">
						Gallery
					</Text>
					<Text fontSize="2rem" color="white-10" ml="2rem">
						Roadmap
					</Text>
				</Box>
			</Box>
			<Box
				position="absolute"
				top="30%"
				left="50%"
				transform="translateX(-50%)"
				column
				center
				minWidth="70%"
				zIndex={3}
			>
				<Text
					id="headline"
					color="white"
					fontSize={{ mobS: "3.6rem",tabS:"5rem", deskS: "7.2rem" }}
					fontWeight="extra-bold"
          mt="5rem"
					mb="4rem"
					textTransform="uppercase"
					textAlign="center"
				>
					Space Man Astro Club
				</Text>
				<Box
					bg="yellow-10"
					zIndex={2}
					px={{ mobS: "2rem", deskS: "4.8rem" }}
					py={{ mobS: "1rem", deskS: "2rem" }}
					borderRadius="4px"
					cursor="pointer"
					className="cta-btn"
				>
					<Text fontSize="2rem" color="black-20" fontWeight="extra-bold">
						Let's Begin
					</Text>
				</Box>
			</Box>
			{/* <-------------BANNER BACKGROUND ENDS----------------> */}

			{/* <------------- WEBSITE BODY STARTS HERE ----------------> */}
			<Box
				color="white"
				className="body"
				bg="blue-10"
				mt={{ mobS: "39rem", deskM: "60rem", deskL: "80rem" }}
				css={`
					clip-path: polygon(0% 0%, 50% 7%, 100% 0%, 100% 100%, 0% 100%);
					@media only screen and (max-width: ${theme.breakpoints.tabS}) {
						clip-path: polygon(0% 0%, 50% 4%, 100% 0%, 100% 100%, 0% 100%);
					}
				`}
			>
				<Box display="flex" pt="20rem" center pl={{mobS:"10rem",deskS:"20rem"}} pr={{mobS:"10rem",deskS:"20rem"}}>
					<Box mt="2rem">
						<Text
							fontSize="4.8rem"
							color="red-10"
							mb="0"
							fontWeight="extra-bold"
						>
							10,000 <br />
							Generative Characters
						</Text>
						<Text
							fontSize="4.8rem"
							color="white-10"
							mt="0"
							mb="4.8rem"
							fontWeight="extra-bold"
						>
							ready to tell a story.
						</Text>
						<Text
							fontSize="2rem"
							color="grey"
							mb="4.8rem"
							maxWidth="50rem"
							fontWeight="thin"
						>
							SMAC is a collection of 10,000 Generative pieces of art with
							references from an upcoming comic book. The collection focuses on
							characters and their stylised appearance as well as their part in
							the story arc based on the SMAC comic book.
						</Text>
					</Box>
					<Box ml="8rem">
						<Image
							src="/static/images/meka_08.jpeg"
							height="490"
							width="490"
							// layout="responsive"
						/>
					</Box>
				</Box>

				{/* <------------------ REPETITVE CONTENT TO BE DELETED LATER ------------------> */}

				<Box
					display={{ deskS: "flex" }}
					pt="20rem"
					center
					pl="20rem"
					pr="15rem"
				>
					<Box mt="2rem">
						<Text fontSize="4.8rem" color="red-10" mb="0">
							8,888 unique Mekas
						</Text>
						<Text fontSize="4.8rem" color="white-10" mt="0" mb="4.8rem">
							who need Drivers.
						</Text>
						<Text fontSize="2rem" color="white-10" mb="4.8rem" maxWidth="50rem">
							The MekaVerse is a collection of 8,888 generative Mekas with
							hundreds of elements inspired by the Japan Mecha universes.
						</Text>
						<Text fontSize="2rem" color="white-10" maxWidth="50rem">
							Each artwork is original, with its own color palette and creation.
							The objective was to make each Meka unique in order to prioritize
							quality above quantity.
						</Text>
					</Box>
					<Box ml="8rem">
						<Image
							src="/static/images/meka_08.jpeg"
							height="490"
							width="490"
							layout="responsive"
						/>
					</Box>
				</Box>

				{/* <------------------ REPETITVE CONTENT TO BE DELETED LATER ENDS ------------------> */}
			</Box>
		</Box>
	);
};

export default HomeComp;
