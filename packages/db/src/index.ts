// oxlint-disable import/no-relative-parent-imports
import { env } from "@next-prisma-postgresql-better-auth-ultracite-skills-ruler-mcp/env/server";
import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "../prisma/generated/client";

const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export default prisma;
