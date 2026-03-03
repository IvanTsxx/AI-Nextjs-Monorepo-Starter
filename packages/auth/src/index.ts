import prisma from "@next-prisma-postgresql-better-auth-ultracite-skills-ruler-mcp/db";
import { env } from "@next-prisma-postgresql-better-auth-ultracite-skills-ruler-mcp/env/server";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
  trustedOrigins: [env.CORS_ORIGIN],
});
