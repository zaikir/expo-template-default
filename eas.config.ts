import { Env, EasConfig } from "@kirz/expo-env";

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
