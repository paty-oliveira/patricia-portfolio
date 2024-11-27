import { createSystem, defineConfig, SystemConfig } from "@chakra-ui/react";

import { globalCssConfig } from "./globalCss";

const config: SystemConfig = defineConfig({
  globalCss: { ...globalCssConfig },
});

const systemStyling = createSystem(config);

export default systemStyling;
