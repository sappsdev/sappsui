import button from "./button.js";
import card from "./card.js";
import content from "./content.js";
import dock from "./dock.js";
import dropdown from "./dropdown.js";
import image from "./image.js";
import layout from "./layout.js";
import menu from "./menu.js";
import navbar from "./navbar.js";
import page from "./page.js";
import radio from "./radio.js";
import sidebar from "./sidebar.js";
import tabs from "./tabs.js";
import textfield from "./textfield.js";

const componentsStyles = {
  ...layout,
  ...content,
  ...sidebar,
  ...card,
  ...navbar,
  ...dock,
  ...page,
  ...tabs,
  ...menu,
  ...radio,
  ...button,
  ...image,
  ...textfield,
  ...dropdown,
};
export default componentsStyles;
