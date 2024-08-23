import { Env } from "@kirz/expo-env";
import { EasConfig } from "./eas-config";

console.log(Env);

export default (): EasConfig => ({
  build: {
    base: {
      pnpm: "9.7.0",
      prebuildCommand: `prebuild --skip-dependency-update react ${Env.APP_NAME}`,
    },

    simulator: {
      extends: "base",
      ios: {
        simulator: true,
      },
      android: {
        buildType: "apk",
      },
    },

    development: {
      ios: {},
    },

    production: {
      ios: {},
    },
  },
});
