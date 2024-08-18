import z from "zod";
import Schema from "./env";

export const Env = z
  .object({
    ...Schema,
    NODE_ENV: z.enum(["development", "production"]).default("development"),
  })
  .parse(process.env);
