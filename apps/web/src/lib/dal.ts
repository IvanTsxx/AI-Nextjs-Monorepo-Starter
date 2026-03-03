import { auth } from "@next-prisma-postgresql-better-auth-ultracite-skills-ruler-mcp/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const verifySession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login");
  }

  return session;
};
