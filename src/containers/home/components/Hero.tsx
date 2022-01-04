import Image from "next/image";
import React, { useContext } from "react";
import Box from "src/components/Box";
import ConnectWalletButton from "src/components/ConnectWalletButton";
import CountdownTimer from "src/components/CountdownTimer";
import If from "src/components/If";
import { StatesContext } from "src/components/StatesContext";
import Text from "src/components/Text";
import { statuses } from "..";
import { DISCORD_INVITE } from "../utils";

const Hero = ({ status, setStatus, projectDetails, setDisplayModal }) => {
  const state = useContext(StatesContext);
  
  return (
    <Box
      column
      center
      minWidth="70%"
      zIndex={3}
      mt={{ mobS: "16rem", deskM: "14.9rem" }}
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
        minWidth="100%"
      >
        Space Man Astro Club
      </Text>
      <If
        condition={status === statuses.PRESALE_NEXT}
        then={
          <Box
            id="timer"
            display={{ mobS: "none", deskM: "flex" }}
            column
            center
            color="white-10"
            mb="wm"
          >
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
              <Box
                id="timer"
                column
                center
                color="white-10"
                mb="wm"
                display={{ mobS: "none", deskM: "flex" }}
              >
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
              display={{ mobS: "none", deskM: "flex" }}
            >
              <Text
                fontSize="2.4rem"
                fontWeight="semi-bold"
                letterSpacing="0.05em"
              >
                Buy Spacemen
              </Text>
            </Box>
            <Box
              row
              mt="mxxxl"
              id="address"
              display={{ mobS: "none", deskM: "flex" }}
            >
              <Text as="s2" color="white" mr="ms" textShadow="0 0 20px #000000">
                Wallet Connected:
              </Text>
              <Text as="s2" color="red-20" textShadow="0 0 20px #000000">
                {state.address}
              </Text>
            </Box>
          </React.Fragment>
        }
        else={
          <>
            <Box display={{ mobS: "none", deskM: "flex" }}>
              <ConnectWalletButton status={status} />
            </Box>
          </>
        }
      />
      <Box display={{ mobS: "flex", deskM: "none" }} column center>
        <Box as="a" href={DISCORD_INVITE} target="_blank" mt="wm">
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
              textShadow="0 0 10px #000000"
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
        <Text
          color="red-10"
          mt="mxxxl"
          textAlign="center"
          fontSize="1.6rem"
          fontWeight="semi-bold"
          textShadow="0 0 10px #000000"
        >
          Use a laptop/desktop to buy a Spaceman
        </Text>
      </Box>
    </Box>
  );
};

export default Hero;
