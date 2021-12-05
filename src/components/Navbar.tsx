import Box from "./Box";
import Text from "./Text";
import Image from "next/image";
import { DISCORD_INVITE } from "src/containers/home/utils";

const Navbar = () => {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100vw"
      between
      overflow="hidden"
      mt={{ mobS: "mxxxl", deskM: "wxxs" }}
    >
      <Box
        id="navbar"
        row
        between
        mx="auto"
        width={{ mobS: "90vw", deskM: "116rem" }}
      >
        <Box
          height={{ mobS: "3.6rem", deskM: "7.2rem" }}
          width={{ mobS: "12.5rem", deskM: "24.6rem" }}
          position="relative"
          overflow="hidden"
        >
          <Image src="/static/images/brand.png" layout="fill" quality="100" />
        </Box>
        <Box row display={{ mobS: "none", deskM: "flex" }}>
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
        <Box
          as="a"
          href={DISCORD_INVITE}
          display={{ mobS: "none", deskM: "flex" }}
          target="_blank"
        >
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
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
