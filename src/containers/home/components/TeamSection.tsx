import Box from "src/components/Box";
import Text from "src/components/Text";
import { TEAM_MEMBERS } from "../utils";
import Image from "next/image";

const TeamSection = () => {
  return (
    <Box mt="22.6rem" mx="auto" width="112rem">
      <Text as="h2" color="red-20" mb="wm">
        The team
      </Text>
      <Box row between>
        {TEAM_MEMBERS.map((member, idx) => (
          <Box key={idx}>
            <Box position="relative" height="35rem" width="35rem">
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
