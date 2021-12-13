import React from 'react'
import Box from './Box'
import Text from './Text'
import Image from "next/image";
import {
  DISCORD_INVITE,
  INSTAGRAM_HANDLE,
  TWITTER_HANDLE,
} from "src/containers/home/utils";
import Hamburger from "images/icons/hamburger.svg";
import RightArrow from "images/icons/arrow-right.svg";
import { gsap } from "gsap";
import Twitter from "images/icons/twitter-fill.svg";
import Discord from "images/icons/discord-fill.svg";
import Instagram from "images/icons/instagram-fill.svg";


const Navbar = () => {
    return (
        <Box
        position="relative"
        left="0"
        width="100vw"
        between
        // overflowY="hidden"
        backgroundColor="transparent"
       >
        <Box
          id="navbar"
          row
          between
          px={{ mobS: "1rem", tabS: "14rem", deskL: "21rem" }}
          width="100vw"
          mt="40px"
          mb="3rem"
        >
          <Box
            height="7.2rem"
            width="24.6rem"
            position="relative"
            // overflow="hidden"
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
    )
}

export default Navbar
