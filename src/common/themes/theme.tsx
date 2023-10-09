import { extendTheme } from "@chakra-ui/react";
import { darkColors, lightColors } from "./colors";

const darkTheme = extendTheme({
  darkColors,
});

const lightTheme = extendTheme({
  lightColors,
});

export { darkTheme, lightTheme };
