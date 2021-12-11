import Box from "src/components/Box";
import Text from "src/components/Text";
import Image from "next/image";

const Overview = () => {
  return (
    <Box display="flex" pt="20rem" center pl="20rem" pr="15rem">
      <Box mt="0rem" column>
        <Text as="h2" color="red-20">
          10,000 <br />
          Generative Characters <br /> ready to tell a story.
        </Text>
        <Text
          as="b1"
          mt="mxxxl"
          maxWidth="51rem"
          fontFamily="Space Grotesk"
          color="#EAEAEA"
        >
          SMAC is a collection of 10,000 Generative pieces of art with
          references from an upcoming comic book.
        </Text>
        <Text
          as="b1"
          mt="2rem"
          maxWidth="51rem"
          fontFamily="Space Grotesk"
          color="#EAEAEA"
        >
          The collection focuses on characters and their stylised appearance as
          well as their part in the story arc based on the SMAC comic book.
        </Text>
      </Box>
      <Box ml="6rem">
        <Image
          src="/static/images/spacemen.gif"
          height="490"
          width="490"
          quality="75"
        />
      </Box>
    </Box>
  );
};

export default Overview;
