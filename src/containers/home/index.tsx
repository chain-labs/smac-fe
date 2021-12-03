import Box from "src/components/Box";
import Image from "next/image";
import Text from "src/components/Text";
import React, { useContext, useEffect, useState } from "react";

import CountdownTimer from "src/components/CountdownTimer";
import { StatesContext } from "src/components/StatesContext";
import ConnectWalletButton from "src/components/ConnectWalletButton";
import If from "src/components/If";
import axios from "axios";
import {
  CONTRACT_ABI_URL,
  CONTRACT_POLYGON_ADDRESS,
} from "src/utils/constants";

import { ROADMAP, POST_SALE_ROADMAP, DISCORD_INVITE } from "./utils";
import useContract from "src/ethereum/useContract";
import BuyModal from "./components/BuyModal";
import Overview from "./components/Overview";
import GallerySlide from "./components/GallerySlide";
import Roadmap from "./components/Roadmap";
import Banner from "./components/Banner";
import TeamSection from "./components/TeamSection";
import SocialMedia from "./components/SocialMedia";
import Footer from "src/components/Footer";

export const statuses = {
  PRESALE_NEXT: "PRESALE_NEXT",
  PRESALE_ACTIVE: "PRESALE_ACTIVE",
  SALE_NEXT: "SALE_NEXT",
  SALE_ACTIVE: "SALE_ACTIVE",
  SOLDOUT: "SOLDOUT",
};

const HomeComp = React.memo(() => {
  const state = useContext(StatesContext);
  const [projectDetails, setProjectDetails] = useState({
    presaleTime: "",
    saleTime: "",
    presalePrice: null,
    publicSalePrice: null,
    isPresaleActive: false,
    isSaleActive: false,
  });
  const [displayModal, setDisplayModal] = useState(false);

  const [abi, setAbi] = useState();

  const SMAC = useContract(CONTRACT_POLYGON_ADDRESS, abi, state.provider);

  const [status, setStatus] = useState(statuses.SALE_ACTIVE);

  const getContract = async () => {
    const abi = await axios(CONTRACT_ABI_URL);
    console.log(abi);

    setAbi(JSON.parse(abi.data.result));
  };

  useEffect(() => {
    getContract();
  }, []);

  useEffect(() => {
    console.log({ SMAC });

    const getDetails = async () => {
      try {
        const presaleTime = await SMAC?.callStatic?.presaleStartTime();
        const saleTime = await SMAC?.callStatic?.publicSaleStartTime();
        const presalePrice = await SMAC?.callStatic?.presalePrice();
        const publicSalePrice = await SMAC?.callStatic?.price();
        const isPresaleActive = await SMAC?.callStatic?.isPresaleActive();
        const isSaleActive = await SMAC?.callStatic?.isSaleActive();

        if (isPresaleActive) {
          setStatus(statuses.PRESALE_ACTIVE);
        } else if (isSaleActive) {
          setStatus(statuses.SALE_ACTIVE);
        }

        setProjectDetails({
          presaleTime: presaleTime.toString(),
          saleTime: saleTime.toString(),
          presalePrice,
          publicSalePrice,
          isPresaleActive,
          isSaleActive,
        });
      } catch (error) {
        console.log({ error });
      }
    };
    if (SMAC) {
      getDetails();
    }
  }, [SMAC]);

  return (
    <Box>
      <If
        condition={displayModal}
        then={
          <BuyModal
            presalePrice={projectDetails.presalePrice}
            salePrice={projectDetails.publicSalePrice}
            presale={status === statuses.PRESALE_ACTIVE}
          />
        }
      />
      {/* <-------------BANNER BACKGROUND----------------> */}
      <Box
        height="100vh"
        width="100vw"
        bg="black-10"
        zIndex={10}
        className="overlay"
        position="absolute"
        top="0"
      ></Box>
      <Banner />
      <Box
        position="absolute"
        top="10"
        left="0"
        width="100vw"
        between
        overflowY="hidden"
      >
        <Box
          id="navbar"
          row
          between
          px={{ mobS: "1rem", tabS: "14rem", deskM: "21rem" }}
          width="100vw"
        >
          <Box
            height="7.2rem"
            width="24.6rem"
            position="relative"
            overflow="hidden"
          >
            <Image src="/static/images/brand.png" layout="fill" quality="100" />
          </Box>
          <Box row>
            <Text fontSize="2rem" fontWeight="medium" color="white-10" mr="wm">
              About
            </Text>
            <Text fontSize="2rem" fontWeight="medium" color="white-10" mr="wm">
              Roadmap
            </Text>
            <Text fontSize="2rem" fontWeight="medium" color="white-10" mr="wm">
              Team
            </Text>
            <Text fontSize="2rem" fontWeight="medium" color="white-10">
              Gallery
            </Text>
          </Box>
          <Box as="a" href={DISCORD_INVITE} target="_blank">
            <Box
              border="2px solid"
              borderColor="white-10"
              px="mm"
              py="mm"
              borderRadius="8px"
              row
              cursor="pointer"
              position="relative"
              overflow="hidden"
              color="white-10"
            >
              <Text
                fontSize="2rem"
                fontWeight="semi-bold"
                color="white-10"
                mr="mm"
              >
                Join Discord
              </Text>
              <Image
                src="/static/images/icons/up-right.png"
                height="24"
                width="24"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position="absolute"
        top="30%"
        left="50%"
        transform="translateX(-50%)"
        column
        center
        minWidth="70%"
        zIndex={3}
      >
        <Text
          id="headline"
          as="h1"
          color="white-10"
          mb="8rem"
          letterSpacing="5px"
          textTransform="uppercase"
          textAlign="center"
          textShadow="0 0 20px #000000"
        >
          Space Man Astro Club
        </Text>
        <If
          condition={status === statuses.PRESALE_NEXT}
          then={
            <Box id="timer" column center color="white-10" mb="wm">
              <Text
                as="s2"
                textTransform="uppercase"
                letterSpacing="0.5rem"
                mb="mm"
                textShadow="0 0 20px #000000"
              >
                Pre-sale Starts In
              </Text>
              <CountdownTimer
                status={status}
                setStatus={setStatus}
                deadline={projectDetails?.presaleTime}
              />
            </Box>
          }
          else={
            <If
              condition={
                status === statuses.PRESALE_ACTIVE ||
                status === statuses.SALE_NEXT
              }
              then={
                <Box id="timer" column center color="white-10" mb="wm">
                  <Text
                    as="s2"
                    textTransform="uppercase"
                    letterSpacing="0.5rem"
                    mb="mm"
                    textShadow="0 0 20px #000000"
                  >
                    Sale Starts In
                  </Text>
                  <CountdownTimer
                    status={status}
                    setStatus={setStatus}
                    deadline={projectDetails?.saleTime}
                  />
                </Box>
              }
            />
          }
        />
        <If
          condition={state.address}
          then={
            <React.Fragment>
              <Box
                as="button"
                className="cta-btn"
                mt={status === statuses.SALE_ACTIVE ? "12rem" : "0"}
                bg="red-10"
                zIndex={2}
                px="wxs"
                py="ml"
                color="white-10"
                borderRadius="8px"
                cursor="pointer"
                border="none"
                fontFamily="inherit"
                boxShadow="0 0 10px #000000"
                onClick={() => setDisplayModal(true)}
              >
                <Text
                  fontSize="2.4rem"
                  fontWeight="semi-bold"
                  letterSpacing="0.05em"
                >
                  Buy Spacemen
                </Text>
              </Box>
              <Box row mt="mxxxl" id="address">
                <Text
                  as="s2"
                  color="white"
                  mr="ms"
                  textShadow="0 0 20px #000000"
                >
                  Wallet Connected:
                </Text>
                <Text as="s2" color="red-20" textShadow="0 0 20px #000000">
                  {state.address}
                </Text>
              </Box>
            </React.Fragment>
          }
          else={<ConnectWalletButton status={status} />}
        />
      </Box>
      {/* <-------------BANNER BACKGROUND ENDS----------------> */}

      {/* <------------- WEBSITE BODY STARTS HERE ----------------> */}
      <Box
        color="white"
        className="body"
        bg="black-10"
        mt={{ mobS: "15rem", deskM: "62rem", deskL: "80rem" }}
        css={`
          clip-path: polygon(0% 0%, 50% 1.8%, 100% 0%, 100% 100%, 0% 100%);
        `}
        position="relative"
      >
        <Box
          className="body-stroke"
          bg="red-20"
          height="6rem"
          width="100vw"
          zIndex={100}
          position="absolute"
          top="0"
          left="0"
          css={`
            clip-path: polygon(0% 0%, 100% 0%, 100% 10%, 50% 100%, 0% 10%);
          `}
        />
        <Overview />
        <GallerySlide />
        <Roadmap title="Roadmap" roadmap={ROADMAP} />
        <Box mb="16rem" />
        <Roadmap title="Post-Sale Roadmap" roadmap={POST_SALE_ROADMAP} />
        <TeamSection />
        <SocialMedia />
        <Footer />
      </Box>
    </Box>
  );
});

export default HomeComp;
