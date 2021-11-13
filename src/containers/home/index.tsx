import Box from "src/components/Box";
import Image from "next/image";
import Text from "src/components/Text";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const scrollBannerAnimation = function () {
  gsap.fromTo(
    ".banner",
    {
      scale: 1,
      y: 0,
    },
    {
      scale: 1.5,
      y: -10,
      scrollTrigger: {
        trigger: ".body",
        markers: true,
        scrub: true,
      },
    }
  );
};

const HomeComp = () => {
  useEffect(() => {
    scrollBannerAnimation();
  }, []);
  return (
    <Box>
      <Box
        width="100vw"
        height="100vh"
        position="fixed"
        top={-80}
        zIndex={-1}
        className="banner"
      >
        <Image
          src="/static/images/banner.webp"
          alt="banner"
          height="9"
          width="16"
          layout="responsive"
        ></Image>
      </Box>
      <Box
        bg="black-10"
        position="absolute"
        top="70%"
        left="50%"
        transform="translateX(-50%)"
        zIndex={2}
        px="3.2rem"
        py="2rem"
        borderRadius="4px"
        cursor="pointer"
        fontWeight="bold"
      >
        <Text fontSize="2rem" color="white">
          Let's Begin
        </Text>
      </Box>
      <Box
        // backgroundImage="linear-gradient(to bottom, rgba(0, 0, 0, 0) -10%, rgba(0, 0, 0, 1) 10%);"
        color="white"
        className="body"
        bg="black-20"
        mt={{ deskM: "60rem", deskL: "80rem" }}
        css={`
          clip-path: polygon(0% 0%, 50% 4%, 100% 0%, 100% 100%, 0% 100%);
        `}
      >
        <Box display="flex" pt="20rem" center pl="20rem" pr="15rem">
          <Box mt="2rem">
            <Text
              fontSize="4.8rem"
              color="red-10"
              mb="0"
              fontWeight="extra-bold"
            >
              8,888 unique Mekas
            </Text>
            <Text
              fontSize="4.8rem"
              color="white-10"
              mt="0"
              mb="4.8rem"
              fontWeight="extra-bold"
            >
              who need Drivers.
            </Text>
            <Text
              fontSize="2rem"
              color="grey"
              mb="4.8rem"
              maxWidth="50rem"
              fontWeight="thin"
            >
              The MekaVerse is a collection of 8,888 generative Mekas with
              hundreds of elements inspired by the Japan Mecha universes.
            </Text>
            <Text
              fontSize="2rem"
              color="grey"
              maxWidth="50rem"
              fontWeight="thin"
            >
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
              // layout="responsive"
            />
          </Box>
        </Box>
        <Box display="flex" pt="20rem" center pl="20rem" pr="15rem">
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
              // layout="responsive"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeComp;
