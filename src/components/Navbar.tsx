import React from 'react'
import Box from './Box'
import Text from './Text'
import Image from "next/image";


const Navbar = () => {
    return (
        <Box
        position="relative"
        top="10"
        py="10px"
        left="0"
        width="100vw"
        between
        mb="6.4rem"
        // overflowY="hidden"
        backgroundColor="black"
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
            //   overflow="hidden"
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
