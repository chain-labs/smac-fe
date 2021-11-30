import Box from "src/components/Box";
import Image from "next/image";
import Text from "src/components/Text";
import { useEffect, useState } from "react";
import theme from "src/styleguide/theme";

import { introAnimation, scrollBannerAnimation } from "./animations";
import CountdownTimer from "src/components/CountdownTimer";

const HomeComp = () => {
  const deadline = "1638343800";
  const [timeLeft, setTimeLeft] = useState();

  useEffect(() => {
    document.querySelector(".banner").addEventListener("load", () => {
      introAnimation();
    });
    scrollBannerAnimation();
    // const timer = setInterval(())
  }, []);

  return (
    <Box>
      {/* <-------------BANNER BACKGROUND----------------> */}
      <Box
        height="100vh"
        width="100vw"
        bg="black-10"
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
        <Image
          src="/static/images/banner.webp"
          alt="banner"
          height="9"
          width="16"
          layout="responsive"
          quality={1}
          priority
          onLoadingComplete={introAnimation}
        ></Image>
        <Box
          bg="black-10"
          opacity="70%"
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
        left="0"
        width="100vw"
        between
        overflowY="hidden"
      >
        <Box
          id="navbar"
          row
          between
          px={{ mobS: "1rem", tabS: "14rem", deskM: "21rem" }}
          width="100vw"
        >
          <Box
            height="7.2rem"
            width="24.6rem"
            position="relative"
            overflow="hidden"
          >
            <Image src="/static/images/brand.png" layout="fill" quality="100" />
          </Box>
          <Box row>
            <Text fontSize="2rem" fontWeight="medium" color="white-10" mr="wm">
              About
            </Text>
            <Text fontSize="2rem" fontWeight="medium" color="white-10" mr="wm">
              Roadmap
            </Text>
            <Text fontSize="2rem" fontWeight="medium" color="white-10" mr="wm">
              Team
            </Text>
            <Text fontSize="2rem" fontWeight="medium" color="white-10">
              Gallery
            </Text>
          </Box>
          <a href="https://discord.gg/duEvPCgR4t" target="_blank">
            <Box
              border="2px solid"
              borderColor="white-10"
              px="mm"
              py="mm"
              borderRadius="8px"
              row
              cursor="pointer"
              position="relative"
              overflow="hidden"
              color="white-10"
            >
              <Text
                fontSize="2rem"
                fontWeight="semi-bold"
                color="white-10"
                mr="mm"
              >
                Join Discord
              </Text>
              <Image
                src="/static/images/icons/up-right.png"
                height="24"
                width="24"
              />
            </Box>
          </a>
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
          as="h1"
          color="white-10"
          mb="8rem"
          letterSpacing="5px"
          textTransform="uppercase"
          textAlign="center"
        >
          Space Man Astro Club
        </Text>
        <Box id="timer" column center color="white-10" mb="wm">
          <Text
            as="s2"
            textTransform="uppercase"
            letterSpacing="0.5rem"
            mb="mm"
          >
            Pre-sale Starts In
          </Text>
          <CountdownTimer deadline={deadline} />
        </Box>
        <Box
          bg="red-10"
          zIndex={2}
          px="wxs"
          py="ml"
          color="white-10"
          borderRadius="8px"
          cursor="pointer"
          className="cta-btn"
        >
          <Text fontSize="2.4rem" fontWeight="semi-bold" letterSpacing="0.05em">
            Connect Wallet
          </Text>
        </Box>
      </Box>
      {/* <-------------BANNER BACKGROUND ENDS----------------> */}

      {/* <------------- WEBSITE BODY STARTS HERE ----------------> */}
      <Box
        color="white"
        className="body"
        bg="black-10"
        mt={{ mobS: "15rem", deskM: "60rem", deskL: "80rem" }}
        css={`
          clip-path: polygon(0% 0%, 50% 7%, 100% 0%, 100% 100%, 0% 100%);
        `}
        position="relative"
      >
        <Box
          className="body-stroke"
          bg="red-20"
          height="6rem"
          width="100vw"
          zIndex={100}
          position="absolute"
          top="0"
          left="0"
          css={`
            clip-path: polygon(0% 0%, 100% 0%, 100% 10%, 50% 105%, 0% 10%);
          `}
        />
        <Box display="flex" pt="20rem" center pl="20rem" pr="15rem">
          <Box mt="2rem">
            <Text
              fontSize="4.8rem"
              color="red-10"
              mb="0"
              fontWeight="semi-bold"
            >
              10,000 <br />
              Generative Characters
            </Text>
            <Text
              fontSize="4.8rem"
              color="white-10"
              mt="0"
              mb="4.8rem"
              fontWeight="semi-bold"
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
              src="/static/images/spaceman-1.png"
              height="490"
              width="490"
              quality="75"
            />
          </Box>
        </Box>

        {/* <------------------ REPETITVE CONTENT TO BE DELETED LATER ------------------> */}

        <Box display="flex" pt="20rem" center pl="20rem" pr="15rem">
          <Box mt="2rem">
            <Text
              fontSize="4.8rem"
              color="yellow-10"
              mb="0"
              fontWeight="semi-bold"
            >
              10,000 <br />
              Generative Characters
            </Text>
            <Text
              fontSize="4.8rem"
              color="white-10"
              mt="0"
              mb="4.8rem"
              fontWeight="semi-bold"
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
              src="/static/images/spaceman-4.png"
              height="490"
              width="490"
              quality="75"
            />
          </Box>
        </Box>

        {/* <------------------ REPETITVE CONTENT TO BE DELETED LATER ENDS ------------------> */}
      </Box>
    </Box>
  );
};

export default HomeComp;
