import Box from "src/components/Box";
import Text from "src/components/Text";
import Image from "next/image";

const Overview = () => {
  return (
    <Box
      display="flex"
      pt="20rem"
      mx="auto"
      maxWidth={{ mobS: "90vw", tabS: "95vw", deskM: "116rem" }}
      center
      id="about"
    >
      <Box column>
        <Text
          as="h2"
          color="red-20"
          textAlign={{ mobS: "center", tabS: "start" }}
        >
          10,000 <br />
          generative characters, <br /> ready to tell a story.
        </Text>
        <Box display={{ mobS: "block", tabS: "none" }} mt="mxxxl">
          <Image
            src="/static/images/spacemen.gif"
            height="490"
            width="490"
            quality="75"
          />
        </Box>
        <Text
          as="b1"
          mt="mxxxl"
          maxWidth="51rem"
          fontFamily="Space Grotesk"
          color="#EAEAEA"
          textAlign={{ mobS: "center", tabS: "start" }}
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
          textAlign={{ mobS: "center", tabS: "start" }}
        >
          The collection focuses on characters and their stylised appearance as
          well as their part in the story arc based on the SMAC comic book.
        </Text>
      </Box>
      <Box ml={{tabS: "1rem", deskM: "6rem"}} display={{ mobS: "none", tabS: "block" }}>
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
