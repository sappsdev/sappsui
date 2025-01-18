const utilities = {
  ".scrollbar-hide": {
    "-ms-overflow-style": "none",
    "scrollbar-width": "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  ".row": {
    "@apply flex flex-row": {},
  },
  ".column": {
    "@apply flex flex-col": {},
  },
  ".row-reverse": {
    "@apply flex flex-row-reverse": {},
  },
  ".column-reverse": {
    "@apply flex flex-col-reverse": {},
  },
};

export default utilities;
