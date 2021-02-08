const rawColors = {
  pokeRed: "#cc3535",
  pokeBlack: "#333333",
  pokeGray: "#f0f0f0",
  white: "#ffffff",
  red: "#FF0000",
  black: "#000000",
};

const colors = {
  bgLvl0: rawColors.pokeBlack,
  bgLvl1: rawColors.pokeGray,
  fontColorLight: rawColors.white,
  primaryButton: rawColors.pokeRed,
  primaryButtonHover: rawColors.red,
  secondaryButton: rawColors.pokeBlack,
  secondaryButtonHover: rawColors.black,
  rawColors,
};

const fonts = {
  default: "normal normal 1em/1em Arial, sans-serif",
  link: "normal bold 1em/1em bold Verdana, sans-serif",
  menu: "normal bold 1.3em/1.3em bold Verdana, sans-serif",
  title: "normal bold 2em/2em Verdana, sans-serif",
};

const spacing = {
  innerSpace: {
    small: "8px 8px",
    medium: "16px 16px",
  },
  outterSpace: {
    small: "8px 8px",
    medium: "16px 16px",
  },
  space: {
    medium: "16px",
    large: "32px",
  },
};

const radius = {
  small: "4px",
  medium: "8px",
};
const tokens = {
  colors,
  fonts,
  spacing,
  radius,
};

export default tokens;
