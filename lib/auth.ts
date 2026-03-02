// Token is just the ADMIN_TOKEN env variable — no Node.js crypto needed
// Works in both Edge runtime (middleware) and Node.js (server actions)

export function getAdminToken(): string {
  return process.env.ADMIN_TOKEN ?? "default-dev-token-change-me";
}

export function validateToken(token: string): boolean {
  const adminToken = getAdminToken();
  if (!adminToken || !token) return false;
  return token === adminToken;
}
