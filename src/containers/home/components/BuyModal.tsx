import { ethers } from "ethers";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import Box from "src/components/Box";
import Modal from "src/components/Modal";
import Text from "src/components/Text";
import theme from "src/styleguide/theme";
import { BigNumber } from "ethers";
import useContract from "src/ethereum/useContract";
import { CONTRACT_ADDRESS, getUnit } from "src/utils/constants";
import { StatesContext } from "src/components/StatesContext";
import If from "src/components/If";

import Link from "next/link";

import LoadingRing from "images/icons/loading.svg";
import CloseIcon from "images/icons/cross.svg";

const BuyModal = ({
  presalePrice,
  salePrice,
  presale,
  abi,
  status,
  setDisplayModal,
}: {
  presalePrice: any;
  salePrice: any;
  presale?: boolean;
  abi: any;
  status: string;
  setDisplayModal: (boolean) => void;
}) => {
  const [numberOfTokens, setNumberOfTokens] = useState(1);
  const [price, setPrice] = useState(null);
  const [total, setTotal] = useState(null);
  const [step, setStep] = useState(1);
  const [unit, setUnit] = useState(getUnit());

  const state = useContext(StatesContext);

  const SMAC = useContract(CONTRACT_ADDRESS, abi, state.provider);

  const handleChange = (event) => {
    setNumberOfTokens(event.target.value);
  };

  useEffect(() => {
    document.querySelector("html").style.overflow = "hidden";
    return () => {
      document.querySelector("html").style.overflow = "scroll";
    };
  }, []);

  useEffect(() => {
    if (salePrice && presalePrice) {
      if (presale) {
        const presalePriceBN = ethers.utils.formatUnits(presalePrice, 18);
        const totalPrice = BigNumber.from(numberOfTokens).mul(presalePrice);
        setPrice(presalePriceBN);
        setTotal(totalPrice);
      } else {
        const salePriceInBN = ethers.utils.formatUnits(salePrice, 18);
        const totalPrice = BigNumber.from(numberOfTokens).mul(salePrice);
        setPrice(salePriceInBN);
        setTotal(totalPrice);
      }
    }
  }, [presalePrice, salePrice]);

  useEffect(() => {
    if (salePrice && presalePrice) {
      if (presale) {
        const totalPrice = BigNumber.from(numberOfTokens).mul(presalePrice);
        setTotal(totalPrice);
        return;
      }
      const totalPrice = BigNumber.from(numberOfTokens).mul(salePrice);
      setTotal(totalPrice);
    }
  }, [numberOfTokens]);

  const buyAction = async () => {
    const buyFunctionName = {
      PRESALE_ACTIVE: "presaleBuy(uint256)",
      SALE_ACTIVE: "buy(uint256)",
    };

    const transaction = await SMAC.connect(state.signer)[
      buyFunctionName[status]
    ](numberOfTokens, {
      value: total,
    });
    setStep(2);

    transaction.wait().then((res) => {
      setStep(3);
    });
  };

  return (
    <Modal>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        bg={`${theme.colors["white-10"]}32`}
        box-shadow="inset 1.33333px -1.33333px 1.33333px rgba(157, 157, 157, 0.4), inset 2.66667px -2.66667px 2.66667px rgba(255, 255, 255, 0.4), inset -1.33333px 1.33333px 1.33333px rgba(255, 255, 255, 0.4), inset -2.66667px 2.66667px 2.66667px rgba(157, 157, 157, 0.4);"
        css={`
          backdrop-filter: blur(20px);
        `}
        border="1px solid"
        borderColor={`${theme.colors["white-10"]}50`}
        minWidth={{ tabS: "70rem", deskL: "85rem" }}
        minHeight={{ tabS: "60rem", deskL: "72rem" }}
      >
        <Box
          display={step === 2 ? "none" : "flex"}
          justifyContent="flex-end"
          onClick={() => setDisplayModal(false)}
          mt="mxl"
          mr="mxl"
          cursor="pointer"
        >
          <CloseIcon />
        </Box>
        <If
          condition={step === 1}
          then={
            <Box center column pt={{ tabS: "wxs", deskL: "wxxl" }}>
              <Text
                fontSize="3.2rem"
                fontWeight="semi-bold"
                color="white-10"
                textAlign="center"
                maxWidth={{ tabS: "75%", deskL: "75%" }}
              >
                Select the number of tokens you want to purchase
              </Text>
              <Box
                as="input"
                mt="7.2rem"
                css={`
                  outline: none;
                  height: 5px;
                  overflow: visible;

                  &::-webkit-slider-runnable-track {
                    -webkit-appearance: none;
                    height: 5px;
                    /* width: 20px; */
                    border-radius: 20px;
                    color: ${theme.colors["red-10"]};
                    background: ${theme.colors["red-10"]};
                    cursor: ew-resize;
                    margin-top: 0px;
                    overflow: visible;
                  }

                  &::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    border: none;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    margin-top: -5px;
                    z-index: 10;
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
                  Price: {price} {getUnit()}
                </Text>
                <Text as="s2" color="white-10">
                  Total: {total ? ethers.utils.formatUnits(total, 18) : "0"}{" "}
                  {getUnit()}
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
                onClick={buyAction}
                cursor="pointer"
              >
                <Text as="s2" color="white-10">
                  Mint
                </Text>
              </Box>
              <Text
                fontSize="20px"
                fontFamily="Space Grotesk"
                fontWeight="medium"
                color="white-10"
                mt={{ tabS: "mxxl", deskL: "wxxs" }}
              >
                Note: You can only hold upto 5 SMAC tokens in one wallet
              </Text>
            </Box>
          }
        />
        <If
          condition={step == 2}
          then={
            <Box center column py={{ tabS: "20rem", deskL: "25rem" }}>
              <Box
                css={`
                  & > svg {
                    @keyframes rotate {
                      0% {
                        transform: rotate(0deg);
                      }
                      100% {
                        transform: rotate(360deg);
                      }
                    }

                    animation: rotate 1.2s linear infinite;
                    transform-origin: center;
                  }
                `}
              >
                <LoadingRing />
              </Box>
              <Text
                as="h2"
                color="white-10"
                textAlign="center"
                mt="mxxxl"
                maxWidth={{ tabS: "40rem", deskL: "60rem" }}
              >
                Please wait while we mint your NFTs...
              </Text>
            </Box>
          }
        />
        <If
          condition={step == 3}
          then={
            <Box center column py={{ tabS: "20rem", deskL: "25rem" }}>
              <Text
                as="h2"
                color="white-10"
                textAlign="center"
                mt="mxxxl"
                maxWidth={{ tabS: "47rem", deskL: "68rem" }}
                letterSpacing="0.2rem"
              >
                Thank you for purchasing {numberOfTokens}
                {"  "}
                {numberOfTokens === 1 ? " Spaceman" : " Spacemen"}
              </Text>
              <Link href="/download" as="/download">
                <Box
                  as="button"
                  border="none"
                  fontFamily="inherit"
                  color="white-10"
                  fontWeight="600"
                  fontSize="2rem"
                  bg="red-10"
                  px="wm"
                  py="mm"
                  mt="wxs"
                  center
                  cursor="pointer"
                >
                  Preview and Download
                </Box>
              </Link>
            </Box>
          }
        />
      </Box>
    </Modal>
  );
};

export default BuyModal;
