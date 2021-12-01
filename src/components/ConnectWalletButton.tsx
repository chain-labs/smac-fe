import { ETH_REQUEST_ACCOUNT } from "src/ethereum/utils/methods";
import Box from "./Box";
import Text from "./Text";

const ConnectWalletButton = () => {
  const requestAccount = async () => {
    if (process.browser) {
      // @ts-ignore
      await window?.ethereum?.request({ method: ETH_REQUEST_ACCOUNT });
    }
  };

  return (
    <Box
      bg="red-10"
      zIndex={2}
      px="wxs"
      py="ml"
      color="white-10"
      borderRadius="8px"
      cursor="pointer"
      className="cta-btn"
      as="button"
      border="none"
      onClick={requestAccount}
      fontFamily="inherit"
    >
      <Text fontSize="2.4rem" fontWeight="semi-bold" letterSpacing="0.05em">
        Connect Wallet
      </Text>
    </Box>
  );
};

export default ConnectWalletButton;
