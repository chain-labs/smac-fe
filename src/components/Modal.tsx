import { useEffect } from "react";
import theme from "src/styleguide/theme";
import Box from "./Box";

const Modal = ({ children }) => {
  useEffect(() => {
    return () => {
      document.querySelector("html").style.overflow = "scroll";
    };
  }, []);
  return (
    <Box
      position="fixed"
      bg={`${theme.colors["black-10"]}40`}
      top="0"
      left="0"
      height="100vh"
      width="100vw"
      overflowY="scroll"
      pb="15rem"
      zIndex={15}
    >
      {children}
    </Box>
  );
};

export default Modal;
