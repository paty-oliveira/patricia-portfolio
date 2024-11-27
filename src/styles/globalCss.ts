import { GlobalStyleObject } from "@chakra-ui/react";

export const globalCssConfig: GlobalStyleObject = {
  "*, *::before, *::after": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    backgroundColor: "white",
    color: "black",
  },
  ":root": {
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "30px",
    letterSpacing: "0.5px",
    wordWrap: "break-word",
  },
  "h1, h2, h3, p": {
    margin: 0,
  },
  "input, button, textarea, select": {
    font: "inherit",
    color: "inherit",
    padding: 0,
    margin: 0,
  },
  "ul, ol": {
    listStyle: "none",
  },
  a: {
    display: "block",
    textDecoration: "none",
    color: "inherit",
    font: "inherit",
  },
};
