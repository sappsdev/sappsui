import plugin from "tailwindcss/plugin";
import baseStyles from "./base/index.js";
import colors from "./colors.js";
import componentsStyles from "./components/index.js";

const tailwind = plugin.withOptions(
  (options = {}) =>
    ({ addBase, addComponents, theme }) => {
      addBase(baseStyles);
      addComponents(componentsStyles);
    },
  () => ({
    theme: {
      extend: {
        colors: colors,
      },
    },
  })
);

export default tailwind;
