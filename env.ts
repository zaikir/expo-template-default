import z from "zod";

export default {
  APP_NAME: z.string(),
  APP_BUNDLE_ID: z.string(),
  APP_VERSION: z.string().default("1.0"),
  NULLABLE: z.string().nullable(),
};
