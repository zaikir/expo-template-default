import { EasConfig } from "./eas-config";

export default (): EasConfig => ({
  build: {
    base: {
      pnpm: "8.15.4",
      prebuildCommand: "prebuild --skip-dependency-update react",
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
      env: {
        APP_NAME: "Test",
        APP_BUNDLE_ID: "appstrain.pl.cleaner-4",
        APP_VERSION: "1.0",
      },
      ios: {},
    },

    production: {
      env: {
        APP_NAME: "Test",
        APP_BUNDLE_ID: "appstrain.pl.cleaner-4",
        APP_VERSION: "1.0",
      },
      ios: {},
    },
  },
});
