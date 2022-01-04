import Box from "src/components/Box";
import Text from "src/components/Text";
import theme from "src/styleguide/theme";

const Roadmap = ({ title, roadmap }: { title: string; roadmap: string[] }) => {
  return (
    <Box
      mx="auto"
      width={{ mobS: "90vw", deskM: "116rem" }}
      px="ms"
      overflowX="visible"
      id="roadmap"
    >
      <Text as="h2" color="red-20" mb="mxl">
        {title}
      </Text>
      <Box row overflowX="visible">
        <Box
          width="2px"
          ml="ms"
          backgroundImage="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E1E1E1 8.84%, #DADADA 89.54%, rgba(255, 255, 255, 0) 100%)"
        />
        <Box pt="mxxxl" zIndex={10} overflowX="visible">
          {roadmap.map((item, index) => (
            <Box
              key={`${index}-${item[5]}`}
              row
              fontFamily="Space Grotesk"
              ml={`-${theme.space["mxs"]}`}
              alignItems="center"
              mb="wm"
              color="#EAEAEA"
            >
              <Box
                borderRadius="100%"
                minWidth="1.6rem"
                minHeight="1.6rem"
                bg="red-20"
              />
              <Text
                as="b1"
                ml={{ mobS: "mm", tabS: "7.2rem", deskM: "9rem" }}
                maxWidth={{ mobS: "80vw", tabS: "70vw", deskM: "50vw" }}
              >
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
