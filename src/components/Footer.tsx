import Box from "./Box";
import Image from "next/image";
import Text from "./Text";

const Footer = () => {
  return (
    <Box pt="wxxl" pb="wxxs">
      <Box row between mx="auto" alignItems="center" width="112rem" mb="wl">
        <Box position="relative" height="10.4rem" width="35.7rem">
          <Image src="/static/images/brand.png" layout="fill" />
        </Box>
        <Box row>
          <Box column mr="wxxs">
            <Box
              as="a"
              href=""
              fontSize="1.8rem"
              fontWeight="300"
              color="#EAEAEA"
              mb="mxxl"
            >
              About
            </Box>
            <Box
              as="a"
              href=""
              fontSize="1.8rem"
              fontWeight="300"
              color="#EAEAEA"
              mb="mxxl"
            >
              Roadmap
            </Box>
            <Box
              as="a"
              href=""
              fontSize="1.8rem"
              fontWeight="300"
              color="#EAEAEA"
              mb="mxxl"
            >
              Team
            </Box>
            <Box
              as="a"
              href=""
              fontSize="1.8rem"
              fontWeight="300"
              color="#EAEAEA"
            >
              Gallery
            </Box>
          </Box>
          <Box column mr="wxxs">
            <Box
              as="a"
              href=""
              fontSize="1.8rem"
              fontWeight="300"
              color="#EAEAEA"
              mb="mxxl"
            >
              Discord
            </Box>
            <Box
              as="a"
              href=""
              fontSize="1.8rem"
              fontWeight="300"
              color="#EAEAEA"
              mb="mxxl"
            >
              Instagram
            </Box>
            <Box
              as="a"
              href=""
              fontSize="1.8rem"
              fontWeight="300"
              color="#EAEAEA"
            >
              Twitter
            </Box>
          </Box>
          <Box column>
            <Box
              as="a"
              href=""
              fontSize="1.8rem"
              fontWeight="300"
              color="#EAEAEA"
              mb="mxxl"
            >
              Termas and Conditions
            </Box>
            <Box
              as="a"
              href=""
              fontSize="1.8rem"
              fontWeight="300"
              color="#EAEAEA"
              mb="mxxl"
            >
              View on Opensea
            </Box>
            <Box
              as="a"
              href=""
              fontSize="1.8rem"
              fontWeight="300"
              color="#EAEAEA"
            >
              View on Etherscan
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mx="auto" center>
        <Text fontSize="1.6rem" fontWeight="thin" textDecoration="underline">
          Powered by Simplr
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
