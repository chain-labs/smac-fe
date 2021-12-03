import Box from "src/components/Box";
import Text from "src/components/Text";

const SocialMedia = () => {
  return (
    <Box bg="blue-10" mt="24rem">
      <Box mx="auto" width="112rem" row between alignItems="center" py="15rem">
        <Text as="h2" color="red-20">
          Get on board with us
        </Text>
        <Box row between>
          <Box
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
