"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, createSessionValue, isAdminConfigured, verifyPassword } from "@/lib/admin-auth";

export async function login(prevState: { message: string }, formData: FormData) {
  if (!isAdminConfigured()) {
    return { message: "ADMIN_PASSWORD is not set on the server." };
  }

  const submitted = String(formData.get("password") ?? "");
  if (!verifyPassword(submitted)) {
    return { message: "Incorrect password." };
  }

  const store = await cookies();
  store.set(ADMIN_COOKIE, createSessionValue(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  redirect("/admin");
}

export async function logout() {
  const store = await cookies();
  store.delete(ADMIN_COOKIE);
  redirect("/admin");
}
