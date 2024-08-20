import z from "zod";
import Schema from "./env";
import fs from "node:fs/promises";
import yaml from "yaml";

const reset = "\x1b[0m";
const red = "\x1b[31m";

const NODE_ENV = !process.env.NODE_ENV ? "development" : process.env.NODE_ENV;

let processEnv = {
  ...process.env,
  NODE_ENV,
};

const envFile = `env.${processEnv.NODE_ENV === "production" ? "prod" : "dev"}.yml`;
try {
  // @ts-ignore
  const data = yaml.parse(await fs.readFile(envFile, "utf8"));
  processEnv = { ...processEnv, ...data };
} catch {}

const parsed = z
  .object({
    ...Schema,
    NODE_ENV: z.enum(["development", "production"]).default("development"),
  })
  .safeParse(processEnv);

if (parsed.success === false) {
  console.log(
    `❌ ${red}Invalid environment variables:${reset}`,
    parsed.error.flatten().fieldErrors,
  );

  process.exit(1);
}

// @ts-ignore
await fs.writeFile(
  "app.json",
  JSON.stringify({ extra: parsed.data }, undefined, 2),
);

export const Env = parsed.data;
export type EnvType = typeof Env;
