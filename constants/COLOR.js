const Colors = {
  red: "#F01E2F",
  lightRed: "#F6E6E1",
  orange: "#FF3B00",
  green: "#0CB295",
  lightGreen: "#D8F7E7",
  paleGray: "#FAFAFA",
  black: "#393A39",
  mintGreen: "#48D9B7",
  paleMintgreen: "#CCF5F8",
  yellow: "#FDB85E",
  paleYellow: "#FFEED9",
  pink: "#FF6668",
  palePink: "#FFDFDF",
  lightBlue: "#6796F0",
  paleLightBlue: "#CFDDFA",
  lightGray: "#F5F5F5",
  mediumGray: "#E1E1E1",
  blueGray: "#9A9CB2",
  warmGray: "#6D6D6D",
  darkGray: "#ACACAC",
  blue: "#0091ff",
  white: "#FFFFFF",
  transparent: "#00000000",
  line: "#00C300",
  gray: "#D1D1D1",
};

const convertHexToRGBA = (hexCode, opacity) => {
  let hex = hexCode.replace("#", "");
  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${opacity})`;
};

const COLOR = {
  //main
  primary: Colors.red,
  secondaryLight: convertHexToRGBA(Colors.red, 0.8),
  secondary: Colors.orange,
  gradient: `linear-gradient(to top,  ${Colors.red} , ${Colors.orange})`,
  //success
  success: Colors.green,
  successBg: Colors.lightGreen,
  //error
  danger: Colors.red,
  dangerBg: Colors.lightRed,
  error: Colors.red,
  //bg
  background: Colors.lightGray,
  backgroundLight: Colors.paleGray,
  disabledBg: Colors.gray,
  //outline
  lightOutline: Colors.lightGray,
  outline: Colors.mediumGray,
  darkOutline: Colors.darkGray,
  disableOutline: Colors.blueGray,
  divider: Colors.blueGray,
  //text
  textPrimary: Colors.black,
  textSecondary: Colors.darkGray,
  textLink: Colors.blue,
  textInComponent: Colors.blueGray,
  disabled: Colors.blueGray,
  hint: Colors.red,
  //black shade
  black: Colors.black,
  darkGrey: Colors.darkGray,
  white: Colors.white,
  transparent: Colors.transparent,
  primaryGray: Colors.gray,
  secondaryGray: Colors.blueGray,
};

module.exports = COLOR;

