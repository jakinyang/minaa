export const lightColor =
{
  bluePrimary: {
    100: "#eff3f6",
    200: "#dfe8ed",
    300: "#d0dce5",
    400: "#c0d1dc",
    500: "#b0c5d3",
    600: "#8d9ea9",
    700: "#6a767f",
    800: "#464f54",
    900: "#23272a"
  },
  darkBlue: {
    100: "#d2d7dc",
    200: "#a4b0b9",
    300: "#778895",
    400: "#496172",
    500: "#1c394f",
    600: "#162e3f",
    700: "#11222f",
    800: "#0b1720",
    900: "#060b10"
  },
  blackOff: {
    100: "#d2d2d3",
    200: "#a4a6a8",
    300: "#77797c",
    400: "#494d51",
    500: "#1c2025",
    600: "#161a1e",
    700: "#111316",
    800: "#0b0d0f",
    900: "#060607"
  },
  grayAccent: {
    100: "#f1f3f2",
    200: "#e3e7e5",
    300: "#d4dbd7",
    400: "#c6cfca",
    500: "#b8c3bd",
    600: "#939c97",
    700: "#6e7571",
    800: "#4a4e4c",
    900: "#252726"
  },
  redAccent: {
    100: "#fbdfdd",
    200: "#f6bfbb",
    300: "#f29e99",
    400: "#ed7e77",
    500: "#e95e55",
    600: "#ba4b44",
    700: "#8c3833",
    800: "#5d2622",
    900: "#2f1311"
  },
  altGreen: {
    "50": "#dde49c",
    "100": "#ced681",
    "200": "#bdc66a",
    "300": "#aab454",
    "400": "#949d45",
    "500": "#7f8643",
    "600": "#6c7141",
    "700": "#5a5d3d",
    "800": "#494b37",
    "900": "#393a31"
  },
  lightseagreen: {
    "50": "#7af6f0",
    "100": "#5aefe7",
    "200": "#3ce4dc",
    "300": "#25d4cb",
    "400": "#20b2aa",
    "500": "#219892",
    "600": "#22807b",
    "700": "#216966",
    "800": "#1f5451",
    "900": "#1b403e"
  },
  lapizLazuli: {
    "50": "#84aee2",
    "100": "#699ad5",
    "200": "#5185c5",
    "300": "#4372ac",
    "400": "#386090",
    "500": "#365479",
    "600": "#344964",
    "700": "#2f3e51",
    "800": "#2a333f",
    "900": "#23282e"
  },
  sheenGold: {
    "50": "#f2ddac",
    "100": "#e9cd8e",
    "200": "#ddbd72",
    "300": "#cfab58",
    "400": "#c49a39",
    "500": "#ac8a3b",
    "600": "#957a3b",
    "700": "#7e6a3a",
    "800": "#695a37",
    "900": "#564c33"
  },
  otherGold: {
    "50": "#ffdc9f",
    "100": "#ffcd77",
    "200": "#ffbf50",
    "300": "#ffb028",
    "400": "#ffa300",
    "500": "#e19107",
    "600": "#c3800c",
    "700": "#a87011",
    "800": "#8e6113",
    "900": "#755115"
  }
};


export const darkColor =
{
  bluePrimary: {
    100: "#23272a",
    200: "#464f54",
    300: "#6a767f",
    400: "#8d9ea9",
    500: "#b0c5d3",
    600: "#c0d1dc",
    700: "#d0dce5",
    800: "#dfe8ed",
    900: "#eff3f6",
  },
  darkBlue: {
    100: "#060b10",
    200: "#0b1720",
    300: "#11222f",
    400: "#162e3f",
    500: "#1c394f",
    600: "#496172",
    700: "#778895",
    800: "#a4b0b9",
    900: "#d2d7dc",
  },
  blackOff: {
    100: "#060607",
    200: "#0b0d0f",
    300: "#111316",
    400: "#161a1e",
    500: "#1c2025",
    600: "#494d51",
    700: "#77797c",
    800: "#a4a6a8",
    900: "#d2d2d3",
  },
  grayAccent: {
    100: "#252726",
    200: "#4a4e4c",
    300: "#6e7571",
    400: "#939c97",
    500: "#b8c3bd",
    600: "#c6cfca",
    700: "#d4dbd7",
    800: "#e3e7e5",
    900: "#f1f3f2",
  },
  redAccent: {
    100: "#2f1311",
    200: "#5d2622",
    300: "#8c3833",
    400: "#ba4b44",
    500: "#e95e55",
    600: "#ed7e77",
    700: "#f29e99",
    800: "#f6bfbb",
    900: "#fbdfdd",
  },
};

export const PaperThemeColorsLight = {
  "colors": {
    "primary": lightColor.lapizLazuli[200], // Color for buttons and main things
    "onPrimary": "#dfe8ed",
    "primaryContainer": "#c0d1dc",
    "onPrimaryContainer": "#464f54",
    "secondary": "#162e3f",
    "onSecondary": "#a4b0b9",
    "secondaryContainer": "transparent",
    "onSecondaryContainer": "#0b1720", // This controls text for the chips
    "tertiary": "#161a1e",
    "onTertiary": "#a4a6a8",
    "tertiaryContainer": "#494d51",
    "onTertiaryContainer": "#0b0d0f",
    "error": "#ba4b44",
    "onError": "#f6bfbb",
    "errorContainer": "#ed7e77",
    "onErrorContainer": "#5d2622",
    "background": "#e3e7e5",
    "onBackground": "#4a4e4c",
    "surface": "#e3e7e5",
    "onSurface": "#4a4e4c", // Card text and card title
    "surfaceVariant": "#c6cfca",
    "onSurfaceVariant": lightColor.otherGold[400], // Bookmark Icon
    "outline": "#c6cfca",
    "outlineVariant": "#939c97",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(52, 47, 50)",
    "inverseOnSurface": "rgb(248, 238, 242)",
    "inversePrimary": "#ed7e77",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(250, 241, 250)",
      "level2": "rgb(247, 234, 247)",
      "level3": "rgb(244, 228, 244)",
      "level4": "rgb(243, 226, 243)",
      "level5": "rgb(241, 222, 241)"
    },
    "surfaceDisabled": "rgba(30, 26, 29, 0.12)",
    "onSurfaceDisabled": "rgba(30, 26, 29, 0.38)",
    "backdrop": "rgba(55, 46, 52, 0.4)"
  }
}