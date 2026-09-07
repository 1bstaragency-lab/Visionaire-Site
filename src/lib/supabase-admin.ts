import "server-only";

import { createClient } from "@supabase/supabase-js";

/* Server-side Supabase client for the admin panel.
 *
 * Uses the SERVICE ROLE key, which bypasses RLS and can therefore read every
 * inquiry. This key must never be exposed to the browser — it is deliberately
 * NOT prefixed with NEXT_PUBLIC_, and this module is server-only.
 */

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

export function isSupabaseAdminConfigured() {
  return Boolean(url && serviceRoleKey);
}

export type Inquiry = {
  id: string;
  created_at: string | null;
  category: string | null;
  subject: string | null;
  name: string | null;
  contact_info: string | null;
  responses: Record<string, string> | null;
};

export type InquiryResult =
  | { ok: true; inquiries: Inquiry[] }
  | { ok: false; error: string };

export async function fetchInquiries(): Promise<InquiryResult> {
  if (!isSupabaseAdminConfigured()) {
    return { ok: false, error: "SUPABASE_SERVICE_ROLE_KEY is not set." };
  }

  const supabase = createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data, error } = await supabase
    .from("leadcaptures2")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return { ok: false, error: error.message };
  return { ok: true, inquiries: (data ?? []) as Inquiry[] };
}
