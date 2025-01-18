import card from "./card.js";
import close from "./close.js";
import content from "./content.js";
import dock from "./dock.js";
import layout from "./layout.js";
import menu from "./menu.js";
import navbar from "./navbar.js";
import page from "./page.js";
import sidebar from "./sidebar.js";
import tabs from "./tabs.js";

const componentsStyles = {
  ...layout,
  ...navbar,
  ...dock,
  ...sidebar,
  ...content,
  ...menu,
  ...close,
  ...page,
  ...card,
  ...tabs,
};

export default componentsStyles;
