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
      <Image
        id="banner-image"
        src="/static/images/banner.webp"
        alt="banner"
        height="9"
        width="16"
        layout="responsive"
        quality={10}
        priority
        onLoadingComplete={() => {
          scrollBannerAnimation();
          introAnimation();
        }}
      ></Image>
      <Box
        bg="black-10"
        opacity="70%"
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
