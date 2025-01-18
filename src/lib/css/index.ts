import plugin from "tailwindcss/plugin";
import baseStyles from "./base/index.js";
import colors from "./colors.js";
import componentsStyles from "./components/index.js";
import utilities from "./utilities/index.js";

const tailwind = plugin.withOptions(
  (options = {}) =>
    ({ addBase, addComponents, addUtilities }) => {
      addUtilities(utilities);
      addBase(baseStyles);
      addComponents(componentsStyles);
    },
  () => ({
    theme: {
      extend: {
        colors: colors,
        boxShadow: {
          small:
            "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
          medium:
            "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
          large:
            "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
        },
      },
    },
  })
);

export default tailwind;
