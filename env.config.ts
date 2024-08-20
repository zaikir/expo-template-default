/*
 * This file should not be modified; use `env.*.yml` in the project root to add your environment variables.
 * If you import `Env` from `@env`, this is the file that will be loaded.
 */

import Constants from "expo-constants";
import type { EnvType } from "./load-env";

const { router: _, ...rest } = Constants.expoConfig?.extra ?? {};

export const Env = {
  ...rest,
  NODE_ENV: process.env.NODE_ENV ?? "development",
} as EnvType;
export { EnvType };
