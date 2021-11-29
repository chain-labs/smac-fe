import React from "react";
import Box, { BoxProps } from "components/Box";

export const fontSizes = {
  h1: { mobS: "3.2rem", tabS: "6.4rem", deskM: "6.4rem" },
  h2: { mobS: "3.2rem", deskM: "4.8rem" },
  s1: { mobS: "2rem", tabS: "2.4rem", deskM: "3.6rem" },
  s2: { mobS: "2rem", tabS: "2.4rem", deskM: "3.6rem" },
  b1: { mobS: "1.6rem", tabS: "2rem", deskM: "2.4rem" },
};

export const charSpacing = {
  h1: { mobS: "-5%", deskM: "12%" },
  h2: "2%",
  s1: "8%",
  s2: "15%",
  b1: { mobS: "2%", deskM: "0%" },
};

export const fontW = {
  h1: 600,
  h2: 600,
  s1: 600,
  s2: 600,
  b1: { mobS: 600, deskM: 300 },
};

const fontWeights = {
  bold: 700,
  "semi-bold": 600,
  medium: 500,
  regular: 400,
  thin: 300,
};

export interface TextProps extends BoxProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "b1" | "b2" | "b3" | "links";
  fontWeight?: "extra-bold" | "bold" | "medium" | "regular" | "thin";
  lineHeight?: "h1" | "h2" | "h4" | "b2";

  children?: string | React.ReactNode;
  id?: string;
  dangerouslySetInnerHTML?: { __html: string };
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
}

const Text = ({
  as = "b1",
  fontWeight = "regular",
  color,
  children,
  ...restProps
}: TextProps): JSX.Element => {
  const fs = fontSizes[as];
  const fw = as ? fontW[as] : fontWeights[fontWeight];
  const cs = charSpacing[as] ?? "150%";

  return (
    <Box
      className={restProps.className}
      margin={0}
      padding={0}
      as={as}
      color={color as string}
      fontSize={fs}
      fontWeight={fw}
      letterSpacing={cs}
      {...restProps}
    >
      {children}
    </Box>
  );
};

export default Text;
