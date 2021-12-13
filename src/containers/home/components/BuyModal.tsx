import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Box from "src/components/Box";
import Modal from "src/components/Modal";
import Text from "src/components/Text";
import theme from "src/styleguide/theme";

const BuyModal = ({
  presalePrice,
  salePrice,
  presale,
}: {
  presalePrice: any;
  salePrice: any;
  presale?: boolean;
}) => {
  const [numberOfTokens, setNumberOfTokens] = useState(1);
  const [price, setPrice] = useState(null);
  const [total, setTotal] = useState(null);

  const handleChange = (event) => {
    setNumberOfTokens(event.target.value);
  };

  useEffect(() => {
    if (salePrice && presalePrice) {
      if (presale) {
        const presalePriceInMatic = ethers.utils.formatUnits(presalePrice, 18);
        const totalPrice = ethers.utils.formatUnits(
          presalePrice * numberOfTokens,
          18
        );
        setPrice(presalePriceInMatic);
        setTotal(totalPrice);
      } else {
        const salePriceInMatic = ethers.utils.formatUnits(salePrice, 18);
        const totalPrice = ethers.utils.formatUnits(
          salePrice * numberOfTokens,
          18
        );
        setPrice(salePriceInMatic);
        setTotal(totalPrice);
      }
    }
  }, [presalePrice, salePrice]);

  useEffect(() => {
    if (presale) {
      const totalPrice = ethers.utils.formatUnits(
        presalePrice * numberOfTokens,
        18
      );
      setTotal(totalPrice);
      return;
    }
    const totalPrice = ethers.utils.formatUnits(salePrice * numberOfTokens, 18);
    setTotal(totalPrice);
  }, [numberOfTokens]);

  console.log({ salePrice });

  return (
    <Modal>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        center
        column
        bg={`${theme.colors["white-10"]}32`}
        box-shadow="inset 1.33333px -1.33333px 1.33333px rgba(157, 157, 157, 0.4), inset 2.66667px -2.66667px 2.66667px rgba(255, 255, 255, 0.4), inset -1.33333px 1.33333px 1.33333px rgba(255, 255, 255, 0.4), inset -2.66667px 2.66667px 2.66667px rgba(157, 157, 157, 0.4);"
        css={`
          backdrop-filter: blur(20px);
        `}
        border="1px solid"
        borderColor={`${theme.colors["white-10"]}50`}
        px={{ tabS: "5rem", deskL: "14rem" }}
        py="9rem"
      >
        <Text
          fontSize="3.2rem"
          fontWeight="semi-bold"
          color="white-10"
          textAlign="center"
        >
          Select the number of tokens you want to purchase
        </Text>
        <Box
          as="input"
          mt="7.2rem"
          css={`
            outline: none;
            height: 5px;

            &::-webkit-slider-runnable-track {
              -webkit-appearance: none;
              height: 5px;
              /* width: 20px; */
              border-radius: 20px;
              color: ${theme.colors["red-10"]};
              background: ${theme.colors["red-10"]};
              cursor: ew-resize;
              margin-top: 0px;
            }

            &::-webkit-slider-thumb {
              -webkit-appearance: none;
              border: none;
              height: 20px;
              width: 20px;
              border-radius: 50%;
              background-color: goldenrod;
              margin-top: -5px;
            }
          `}
          type="range"
          list="tickmarks"
          value={numberOfTokens}
          step="1"
          onChange={handleChange}
          min="0"
          max={5}
          style={{ width: `${5 * 10}rem` }}
        />
        <Box color="white" mt="wxxs" width="50rem" between mb="wm">
          <Text fontWeight="semi-bold" fontSize="2.4rem">
            0
          </Text>
          <Text fontWeight="semi-bold" fontSize="2.4rem">
            1
          </Text>
          <Text fontWeight="semi-bold" fontSize="2.4rem">
            2
          </Text>
          <Text fontWeight="semi-bold" fontSize="2.4rem">
            3
          </Text>
          <Text fontWeight="semi-bold" fontSize="2.4rem">
            4
          </Text>
          <Text fontWeight="semi-bold" fontSize="2.4rem">
            5
          </Text>
        </Box>
        <Box>
          <Text as="s2" color="white-10" mr="mxxxl">
            Price: {price} MATIC
          </Text>
          <Text as="s2" color="white-10">
            Total: {total} MATIC
          </Text>
        </Box>
        <Box
          as="button"
          border="none"
          fontFamily="inherit"
          bg="red-10"
          px="wm"
          py="mm"
          mt="wxs"
          center
        >
          <Text as="s2" color="white-10">
            Mint
          </Text>
        </Box>
      </Box>
    </Modal>
  );
};

export default BuyModal;
