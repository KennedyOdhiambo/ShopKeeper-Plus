import { loadEnvConfig } from "@next/env"
import { defineConfig } from "drizzle-kit"

const dev = process.env.VERCEL_ENV !== "production"
loadEnvConfig("./", dev)

export default defineConfig({
   schema: "./src/server/db/schema/*",
   out: "./supabase/migrations",
   dialect: "postgresql",
   dbCredentials: {
      url: process.env.DATABASE_URL!,
   },
})




