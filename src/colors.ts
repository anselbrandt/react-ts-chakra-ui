// https://javisperez.github.io/tailwindcolorshades/?blue-ribbon=5468ff

interface Palette {
  [shade: number]: string;
}

interface Color {
  [color: string]: Palette | string;
}

export const colors: Color = {
  white: "#fff",
  black: "#000",
  // nebula: "#5468ff",
  moon: "#f5f5fa",
  asteroid: "#dddfed",
  proton: "#c5c9e0",
  nova: "#848ab8",
  telluric: "#5d6494",
  solstice: "#3a416f",
  cosmos: "#21243d",
  antimatter: "#0b0f20",

  nebula: {
    50: "#f6f7ff",
    100: "#eef0ff",
    200: "#d4d9ff",
    300: "#bbc3ff",
    400: "#8795ff",
    500: "#5468ff",
    600: "#4c5ee6",
    700: "#3f4ebf",
    800: "#323e99",
    900: "#29337d",
  },

  neptune: {
    50: "#f5f6fa",
    100: "#ebecf6",
    200: "#ced0e7",
    300: "#b0b4d9",
    400: "#747cbd",
    500: "#3944a0",
    600: "#333d90",
    700: "#2b3378",
    800: "#222960",
    900: "#1c214e",
  },
  mercury: {
    50: "#f2f9fc",
    100: "#e6f4f8",
    200: "#bfe3ee",
    300: "#99d2e3",
    400: "#4db1cf",
    500: "#008fba",
    600: "#0081a7",
    700: "#006b8c",
    800: "#005670",
    900: "#00465b",
  },
  jupiter: {
    50: "#f5fbfc",
    100: "#ebf7f8",
    200: "#ceecef",
    300: "#b0e0e5",
    400: "#75c9d1",
    500: "#3ab2bd",
    600: "#34a0aa",
    700: "#2c868e",
    800: "#236b71",
    900: "#1c575d",
  },
  saturn: {
    50: "#fef9f7",
    100: "#fdf3ef",
    200: "#fae2d8",
    300: "#f7d1c1",
    400: "#f2ae92",
    500: "#ec8b63",
    600: "#d47d59",
    700: "#b1684a",
    800: "#8e533b",
    900: "#744431",
  },
  mars: {
    50: "#fef7f8",
    100: "#fdeff0",
    200: "#fbd6da",
    300: "#f8bdc3",
    400: "#f28c97",
    500: "#ed5a6a",
    600: "#d5515f",
    700: "#b24450",
    800: "#8e3640",
    900: "#742c34",
  },
  venus: {
    50: "#fbf5f9",
    100: "#f7ecf3",
    200: "#ebcfe1",
    300: "#dfb2cf",
    400: "#c678ac",
    500: "#ae3e88",
    600: "#9d387a",
    700: "#832f66",
    800: "#682552",
    900: "#551e43",
  },
};
