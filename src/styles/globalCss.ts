import { GlobalStyleObject } from "@chakra-ui/react";

export const globalCssConfig: GlobalStyleObject = {
  "*, *::before, *::after": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    backgroundColor: "#ffff",
    color: "#767676",
  },
  ":root": {
    fontFamily: `"Mulish", sans-serif`,
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "30px",
    letterSpacing: "0.5px",
    wordWrap: "break-word",
  },
  "h1, h2, h3, h4, h5, h6": {
    margin: 0,
    fontWeight: 500,
    lineHeight: 1.2,
    fontFamily: "Montserrat",
    color: "#000",
    backgroundColor: "inherit",
  },
  "input, button, textarea, select": {
    font: "inherit",
    color: "inherit",
    padding: 0,
    margin: 0,
  },
  "ul, ol, li": {
    listStyle: "none",
  },
  a: {
    display: "block",
    textDecoration: "underline",
    cursor: "pointer",
    color: "inherit",
    font: "inherit",
  },
  svg: {
    fill: "currentcolor",
    width: "15px",
    height: "15px",
  },
  p: {
    margin: 0,
    backgroundColor: "inherit",
  },
  h1: {
    fontSize: "45px",
  },
  h2: {
    fontSize: "36px",
  },
  h3: {
    fontSize: "30px",
  },
  h4: {
    fontSize: "24px",
  },
  h5: {
    fontSize: "20px",
  },
  h6: {
    fontSize: "16px",
  },
};
