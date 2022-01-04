import Box from "src/components/Box";
import Text from "src/components/Text";
import { TEAM_MEMBERS } from "../utils";
import Image from "next/image";

const TeamSection = () => {
  return (
    <Box
      mt={{ mobS: "16.4rem", tabS: "15rem", deskM: "22.6rem" }}
      mx="auto"
      width={{ mobS: "90vw", deskM: "112rem" }}
      id="team"
    >
      <Text as="h2" color="red-20" mb="wm">
        The team
      </Text>
      <Box
        display="flex"
        flexDirection={{ mobS: "column", mobL: "row" }}
        justifyContent="space-between"
      >
        {TEAM_MEMBERS.map((member, idx) => (
          <Box key={idx} mb={{ mobS: "wm" }}>
            <Box
              position="relative"
              height={{
                mobS: "35rem",
                mobL: "16rem",
                tabS: "21rem",
                deskM: "35rem",
              }}
              width={{
                mobS: "35rem",
                mobL: "16rem",
                tabS: "21rem",
                deskM: "35rem",
              }}
            >
              <Image src={member.imageUrl} layout="fill" />
            </Box>
            <Box row between mt="mm">
              <Text as="s2" color="white-10">
                {member.name}
              </Text>
              <Box as="a" href={member.twitterUrl} target="_blank">
                <Box as="img" src="/static/images/icons/twitter.png" />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TeamSection;
