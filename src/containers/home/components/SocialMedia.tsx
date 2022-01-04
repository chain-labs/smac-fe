import Box from "src/components/Box";
import Text from "src/components/Text";
import { DISCORD_INVITE, INSTAGRAM_HANDLE, TWITTER_HANDLE } from "../utils";

const SocialLink = ({ href, src, mr }) => {
  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      bg="white-10"
      height={{ mobS: "6.4rem", tabS: "7.5rem", deskL: "12rem" }}
      width={{ mobS: "6.4rem", tabS: "7.5rem", deskL: "12rem" }}
      borderRadius="8px"
      center
      mr={mr}
    >
      {/* @ts-ignore */}
      <Box as="img" src={src} height={{ mobS: "3.2rem", deskL: "4.8rem" }} />
    </Box>
  );
};

const SocialMedia = () => {
  return (
    <Box bg="blue-10" mt={{ mobS: "16rem", tabS: "24rem" }}>
      <Box
        mx="auto"
        width={{ mobS: "90vw", deskM: "112rem" }}
        display="flex"
        flexDirection={{ mobS: "column", tabS: "row" }}
        justifyContent="space-between"
        alignItems={{ mobS: "flex-start", tabS: "center" }}
        py={{mobS: "wxl", tabS: "15rem"}}
      >
        <Text as="h2" color="red-20" mb={{ mobS: "mxxxl", tabS: "0" }}>
          Get on board with us
        </Text>
        <Box row between>
          <SocialLink
            href={DISCORD_INVITE}
            src="/static/images/icons/discord-fill.svg"
            mr="wxs"
          />
          <SocialLink
            href={TWITTER_HANDLE}
            src="/static/images/icons/twitter-fill.svg"
            mr="wxs"
          />
          <SocialLink
            href={INSTAGRAM_HANDLE}
            src="/static/images/icons/instagram-fill.svg"
            mr="0"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SocialMedia;
