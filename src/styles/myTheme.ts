import { extendTheme } from "@chakra-ui/react";

const theme = {
  colors: {
    brand: {
      primary: "#FA58B6",
      background: "#1A1326",
    },
  },
  fonts: {
    heading: "Fredoka One, sans-serif",
    body: "Nunito, sans-serif",
    mono: "Menlo, monospace",
  },
  styles: {
    global: {
      body: {
        bg: "brand.background",
      },
    },
  },
};

const myTheme = extendTheme(theme);

export { myTheme };
