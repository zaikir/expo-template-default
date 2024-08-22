import { Env } from "@kirz/expo-env";
import { ConfigContext, ExpoConfig } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: Env.APP_NAME,
    description: `${Env.APP_NAME} Mobile App`,
    slug: Env.APP_BUNDLE_ID.toLowerCase().replaceAll(".", "-"),
    version: Env.APP_VERSION.toString(),
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
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
        foregroundImage: "./assets/images/icon.png",
        backgroundColor: "#2E3C4B",
      },
      package: Env.APP_BUNDLE_ID.replaceAll("-", "_"),
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
  };
};
