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
import Navbar from "src/components/Navbar";
import Hero from "./components/Hero";

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
    console.log({ CONTRACT_POLYGON_ADDRESS });

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
        console.log({ presalePrice });
      } catch (error) {
        console.log({ error });
      }
    };
    if (SMAC) {
      getDetails();
    }
  }, [SMAC]);

  return (
    <Box overflowX="hidden">
      <If
        condition={displayModal}
        then={
          <BuyModal
            presalePrice={projectDetails.presalePrice}
            salePrice={projectDetails.publicSalePrice}
            presale={status === statuses.PRESALE_ACTIVE}
            abi={abi}
            status={status}
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
      <Navbar />
      <Hero
        status={status}
        setStatus={setStatus}
        projectDetails={projectDetails}
        setDisplayModal={setDisplayModal}
      />
      <Box
        color="white"
        className="body"
        bg="black-10"
        mt={{ mobS: "2rem", deskM: "2rem", deskL: "2rem" }}
        css={`
          clip-path: polygon(0% 0%, 50% 1%, 100% 0%, 100% 100%, 0% 100%);
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
        <Box mb={{ mobS: "wxs", tabS: "wxl", deskM: "16rem" }} />
        <Roadmap title="Post-Sale Roadmap" roadmap={POST_SALE_ROADMAP} />
        <TeamSection />
        <SocialMedia />
        <Footer />
      </Box>
    </Box>
  );
});

export default HomeComp;
