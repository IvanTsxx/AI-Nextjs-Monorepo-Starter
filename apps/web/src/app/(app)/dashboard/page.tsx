import { verifySession } from "@/lib/dal";

import Dashboard from "./dashboard";

export default async function DashboardPage() {
  const session = await verifySession();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {session.user.name}</p>
      <Dashboard session={session} />
    </div>
  );
}
