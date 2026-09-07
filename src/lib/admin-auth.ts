import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/* Admin session gate.
 *
 * The cookie holds an HMAC derived from ADMIN_PASSWORD, so it cannot be forged
 * without knowing the password. The password itself is never stored in the
 * cookie and never reaches the browser.
 */

export const ADMIN_COOKIE = "visionaire_admin";
const SESSION_SUBJECT = "visionaire-admin-v1";

function adminPassword() {
  return process.env.ADMIN_PASSWORD ?? "";
}

export function isAdminConfigured() {
  return adminPassword().length > 0;
}

function sessionToken() {
  return createHmac("sha256", adminPassword()).update(SESSION_SUBJECT).digest("hex");
}

/** Constant-time string comparison that tolerates differing lengths. */
function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export function verifyPassword(submitted: string) {
  const expected = adminPassword();
  if (!expected) return false;
  return safeEqual(submitted, expected);
}

export function createSessionValue() {
  return sessionToken();
}

export async function isAuthenticated() {
  if (!isAdminConfigured()) return false;
  const store = await cookies();
  const value = store.get(ADMIN_COOKIE)?.value;
  if (!value) return false;
  return safeEqual(value, sessionToken());
}
