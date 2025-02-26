import plugin from "tailwindcss/plugin";
import baseStyles from "./base/index.js";
import colorsStyles from "./colors.js";
import componentsStyles from "./components/index.js";
import utilitiesStyles from "./utilities/index.js";

const tailwind = plugin.withOptions(
  () =>
    ({ addBase, addComponents, addUtilities }) => {
      addUtilities(utilitiesStyles);
      addBase(baseStyles);
      addComponents(componentsStyles);
    },
  () => ({
    theme: {
      extend: {
        colors: colorsStyles,
      },
    },
  })
);

export default tailwind;
