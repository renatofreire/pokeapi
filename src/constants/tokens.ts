const rawColors = {
  pokeRed: "#cc3535",
  pokeBlack: "#333333",
  pokeGray: "#f0f0f0",
  pokeBlue: "#3b4cca",
  pokeYellow: "#ffde00",
  white: "#ffffff",
  red: "#FF0000",
  black: "#000000",
  blue: "#0000FF",
  yellow: "#FFFF00",
};

const colors = {
  bgLvl0: rawColors.pokeBlack,
  bgLvl1: rawColors.pokeGray,
  fontColorLight: rawColors.white,
  fontDefault: rawColors.pokeBlack,
  actionButton: rawColors.pokeBlue,
  actionButtonHover: rawColors.blue,
  negativeActionButton: rawColors.pokeRed,
  negativeActionButtonHover: rawColors.red,
  supportButton: rawColors.pokeBlack,
  supportButtonHover: rawColors.black,
  rawColors,
};

const fonts = {
  default: "normal normal 1em/1em Arial, sans-serif",
  link: "normal bold 1em/1em bold Verdana, sans-serif",
  menu: "normal bold 1.3em/1.3em bold Verdana, sans-serif",
  title: "normal bold 2em/2em Verdana, sans-serif",
  sectionTitle: "normal bold 1.3em/1.3em bold Verdana, sans-serif",
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
    verySmall: "4px",
    small: "8px",
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
