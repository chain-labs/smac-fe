import { useEffect } from "react";
import { LOREM_IPSUM } from "src/utils/constants";
import Box from "./Box";
import Modal from "./Modal";
import Text from "./Text";
import CloseIcon from "images/icons/cross.svg";

const TnCModal = ({ setDisplayTnC }) => {
  useEffect(() => {
    document.querySelector("html").style.overflow = "hidden";
    return () => {
      document.querySelector("html").style.overflow = "scroll";
    };
  }, []);

  return (
    <Modal>
      <Box
        bg="white-10"
        color="black-10"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        px={{ mobS: "10vw", tabS: "10vw" }}
        py="5vw"
        display="flex"
        flexDirection={{ mobS: "column", tabS: "row" }}
        center
      >
        <Box
          onClick={() => setDisplayTnC(false)}
          cursor="pointer"
          color="black"
          position="absolute"
          top="1rem"
          right="1rem"
        >
          <CloseIcon />
        </Box>
        <Text as="h1" flex={1}>
          Terms & Conditions
        </Text>
        <Box
          overflowY="auto"
          flex={1}
          maxHeight="60vh"
          width={{ mobS: "70vw", tabS: "30vw" }}
          fontSize={{ mobS: "1.6rem", tabS: "2rem" }}
          ml={{ tabS: "12rem" }}
          mt={{ mobS: "4rem", tabS: "0" }}
          border="1px dashed black"
          p="2rem 1rem"
        >
          {LOREM_IPSUM}
        </Box>
      </Box>
    </Modal>
  );
};

export default TnCModal;
