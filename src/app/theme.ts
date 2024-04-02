import { extendTheme } from "@chakra-ui/react";

const colors = {
    primary: "#CB3438",
    secondary: "#843836",
    dark: "#282829",
    light:"#FEFEFE",
    lightGray: "#E6E7E8"

  };

  export const customGradient = "linear-gradient(90deg, rgba(254,254,254,1) 0%, rgba(230,231,232,1) 100%)"
  export const theme = extendTheme({ colors });