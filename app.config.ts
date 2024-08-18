import { Env } from "@env";
import type { ConfigContext, ExpoConfig } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.APP_NAME,
  description: `${Env.APP_NAME} Mobile App`,
  slug: Env.APP_BUNDLE_ID.toLowerCase().replaceAll(".", "-"),
  version: Env.APP_VERSION.toString(),
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "cover",
    backgroundColor: "#2E3C4B",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: Env.APP_BUNDLE_ID,
  },
  experiments: {
    typedRoutes: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#2E3C4B",
    },
    package: Env.APP_BUNDLE_ID,
  },
  web: {
    favicon: "./assets/favicon.png",
    bundler: "metro",
  },
  plugins: [
    [
      "expo-font",
      {
        fonts: ["./assets/fonts/Inter.ttf"],
      },
    ],
    "expo-router",
    [
      "expo-build-properties",
      {
        android: {
          kotlinVersion: "1.7.22", // for softinput package
        },
      },
    ],
    [
      "app-icon-badge",
      {
        enabled: Env.NODE_ENV !== "production",
        badges: [
          {
            text: Env.NODE_ENV,
            type: "banner",
            color: "white",
          },
        ],
      },
    ],
  ],
});