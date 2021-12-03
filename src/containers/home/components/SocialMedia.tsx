import Box from "src/components/Box";
import Text from "src/components/Text";
import { DISCORD_INVITE, INSTAGRAM_HANDLE, TWITTER_HANDLE } from "../utils";

const SocialMedia = () => {
  return (
    <Box bg="blue-10" mt="24rem">
      <Box mx="auto" width="112rem" row between alignItems="center" py="15rem">
        <Text as="h2" color="red-20">
          Get on board with us
        </Text>
        <Box row between>
          <Box
            as="a"
            href={DISCORD_INVITE}
            target="_blank"
            bg="white-10"
            height="12rem"
            width="12rem"
            borderRadius="8px"
            center
            mr="wxs"
          >
            <Box
              as="img"
              src="/static/images/icons/discord-fill.svg"
              height="wxs"
            />
          </Box>
          <Box
            as="a"
            href={TWITTER_HANDLE}
            target="_blank"
            bg="white-10"
            height="12rem"
            width="12rem"
            borderRadius="8px"
            center
            mr="wxs"
          >
            <Box
              as="img"
              src="/static/images/icons/twitter-fill.svg"
              height="wxs"
            />
          </Box>
          <Box
            as="a"
            href={INSTAGRAM_HANDLE}
            target="_blank"
            bg="white-10"
            height="12rem"
            width="12rem"
            borderRadius="8px"
            center
          >
            <Box
              as="img"
              src="/static/images/icons/instagram-fill.svg"
              height="wxs"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialMedia;
