import Box from "src/components/Box";
import Text from "src/components/Text";
import theme from "src/styleguide/theme";

const Roadmap = ({ title, roadmap }: { title: string; roadmap: string[] }) => {
  return (
    <Box mx="auto" width="90rem">
      <Text as="h2" color="red-20" mb="mxl">
        {title}
      </Text>
      <Box row>
        <Box
          width="2px"
          backgroundImage="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E1E1E1 8.84%, #DADADA 89.54%, rgba(255, 255, 255, 0) 100%)"
        />
        <Box pt="mxxxl">
          {roadmap.map((item, index) => (
            <Box
              key={`${index}-${item[5]}`}
              row
              fontFamily="Space Grotesk"
              ml={`-${theme.space["mxs"]}`}
              center
              mb="wm"
              color="#EAEAEA"
            >
              <Box
                borderRadius="100%"
                minWidth="1.6rem"
                minHeight="1.6rem"
                bg="red-20"
              />
              <Text as="b1" ml="9rem" maxWidth="63rem">
                {item}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Roadmap;
