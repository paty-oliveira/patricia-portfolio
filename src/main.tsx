import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import systemStyling from "./styles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={systemStyling}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <App />
      </ThemeProvider>
    </ChakraProvider>
  </StrictMode>
);
