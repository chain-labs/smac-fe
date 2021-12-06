import React, { useState } from "react";
import Box from "src/components/Box";
import Navbar from "src/components/Navbar";
import Text from "src/components/Text";
import Image from "next/image";

const DownloadNftComp = () => {
	const [arr, setArr] = useState([...Array(5)].map((_, i) => i + 1));
	const toDataURL = (url) => {
		return fetch(url)
			.then((response) => {
				return response.blob();
			})
			.then((blob) => {
				return URL.createObjectURL(blob);
			});
	};

	const downloadAll = async () => {
		if (process.browser) {
			arr.forEach((c) => {
				const url = `static/images/Nft-${c}.png`;
				const name = `Nft-${c}`;
				fetch(url)
					.then((resp) => resp.blob())
					.then((blob) => {
						const url = window.URL.createObjectURL(blob);
						const a = document.createElement("a");
						a.style.display = "none";
						a.href = url;
						// the filename you want
						a.download = name;
						document.body.appendChild(a);
						a.click();
						window.URL.revokeObjectURL(url);
					})
					.catch(() => alert("An error sorry"));
			});
		}
	};

	return (
		<Box bg="main-black" minHeight="100vh">
			<Box mb="9.8rem">
				<Navbar />
			</Box>
			<Box ml={{ tabS: "14rem", deskL: "21rem" }}>
				<Box mb="4.8rem">
					<Text as="h2" color="red-10" mb="2.6rem">
						Welcome to Space Man Astro Club!{" "}
					</Text>
					<Text as="links" color="white-10">
						Here are your tokens :
					</Text>
				</Box>
				<Box
					as="button"
					px="4.7rem"
					py="2.3rem"
					bg="red-10"
					borderRadius="8px"
					border="none"
					cursor="pointer"
					onClick={() => {
						downloadAll();
					}}
				>
					<Text as="links" color="white-10">
						Download All
					</Text>
				</Box>
				<Box display="flex" flexWrap="wrap" width="90%" mt="7.1rem">
					{arr.map((_, i) => (
						<Box
							key={i*i}
							mb="2.4rem"
							mr="mxl"
							position="relative"
							height={{ tabS: "56.8rem", deskL: "60.6rem" }}
							width={{ tabS: "56.8rem", deskL: "60.6rem" }}
						>
							<Image src={`/static/images/Nft-${arr[i]}.png`} layout="fill" />
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default DownloadNftComp;
