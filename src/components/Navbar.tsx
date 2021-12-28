import Box from "./Box";
import Text from "./Text";
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

const NavLink = ({ href, text }) => {
  return (
    <Box as="a" href={href} mb="wm">
      <Text
        fontSize={{ mobS: "2rem", tabS: "3.6rem" }}
        fontWeight="medium"
        color="white-10"
      >
        {text}
      </Text>
    </Box>
  );
};

const Navbar = () => {
  const openDrawer = () => {
    gsap.fromTo(
      "#drawer",
      { display: "block", xPercent: 110 },
      { display: "block", xPercent: 0 }
    );
  };

  const closeDrawer = () => {
    gsap.fromTo(
      "#drawer",
      { xPercent: 0 },
      {
        xPercent: 115,
        display: "none",
      }
    );
    // document.getElementById("drawer").style.display = "none";
  };

  return (
    <Box>
      <Box
        id="drawer"
        position="fixed"
        left="0"
        bg="black-10"
        height="100vh"
        width="100vw"
        zIndex={100}
        display="none"
        pl={{ mobS: "mxxxl", tabS: "wxxs" }}
       >
        <Box
          width={{ mobS: "32px", tabS: "64px" }}
          bg="none"
          mt={{ mobS: "mxxxl", tabS: "wxxs" }}
          onClick={() => {
            closeDrawer();
          }}
        >
          <RightArrow />
        </Box>
        <Box column mt={{ mobS: "10rem", tabS: "15rem" }}>
          <NavLink href="" text="About" />
          <NavLink href="" text="Roadmap" />
          <NavLink href="" text="Team" />
          <NavLink href="" text="Gallery" />
          <Box
            color="white-10"
            row
            between
            width={{ mobS: "70vw", tabS: "50vw" }}
          >
            <Box as="a" href={DISCORD_INVITE}>
              <Discord />
            </Box>
            <Box as="a" href={TWITTER_HANDLE}>
              <Twitter />
            </Box>
            <Box as="a" href={INSTAGRAM_HANDLE}>
              <Instagram />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position="relative"
        // top="0"
        left="0"
        width="100vw"
        between
        overflow="hidden"
        mt={{ mobS: "mxxxl", deskM: "wxxs" }}
        justifyContent={{mobS:"center",tabS:"flex-start"}}
      >
        <Box
          id="navbar"
          row
          between
          mx={{mobS:"0",tabS:"14rem",deskL:"21rem"}}
          width={{ mobS: "90vw", tabS: "146rem" }}
        >
          <Box
            height={{ mobS: "3.6rem", tabS: "6rem", deskM: "7.2rem" }}
            width={{ mobS: "12.5rem", tabS: "21.3rem", deskM: "24.6rem" }}
            position="relative"
            overflow="hidden"
          >
            <Image src="/static/images/brand.svg" layout="fill" quality="100" />
          </Box>
          <Box row display={{ mobS: "none", tabL: "flex" }}>
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
          <Box
            // as="button"
            border="none"
            bg="none"
            display={{ mobS: "flex", tabL: "none" }}
            height={{ mobS: "32px", tabS: "64px" }}
            onClick={() => {
              openDrawer();
            }}
          >
            <Hamburger />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
