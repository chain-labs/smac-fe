import { memo } from "react";
import Box from "src/components/Box";
import Image from "next/image";
import { introAnimation, scrollBannerAnimation } from "../animations";

const Banner = memo(() => {
  return (
    <Box
      width="100vw"
      height="100vh"
      position="fixed"
      top={{ mobS: 0, tabS: -10 }}
      zIndex={-1}
      className="banner"
      key="banner"
    >
      <Box
        height={{ mobS: "50rem", tabS: "56.25vw" }}
        width={{ mobS: "888px", tabS: "100vw" }}
        position="relative"
        ml={{ mobS: "-27rem", tabS: "0", deskL: "0" }}
        mt={{ mobS: "12rem", tabS: "0", deskL: "0" }}
        transform={{
          mobS: "scale(1.6)",
          tabS: "scale(1)",
          deskL: "scale(1)",
        }}
      >
        <Image
          id="banner-image"
          src="/static/images/banner.webp"
          alt="banner"
          layout="fill"
          quality={10}
          priority
          onLoadingComplete={() => {
            scrollBannerAnimation();
            introAnimation();
          }}
        ></Image>
      </Box>
      <Box
        bg="black-10"
        opacity="80%"
        height="120vh"
        width="100vw"
        position="absolute"
        top="0"
        left="0"
      ></Box>
    </Box>
  );
});

export default Banner;
