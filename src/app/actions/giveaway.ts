"use server";

import { createClient } from "@supabase/supabase-js";

// Make sure to set these in .env.local!
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export async function submitGiveawayEntry(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const brand_duration = formData.get("brand_duration") as string;

  if (!name || !phone || !brand_duration) {
    return { success: false, message: "All fields are required." };
  }

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase credentials in .env.local");
    return { success: false, message: "Server configuration error. Missing database keys." };
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    const { error } = await supabase
      .from("giveaway_entries")
      .insert([
        { name, phone, brand_duration }
      ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, message: "Failed to submit entry. Please try again." };
    }

    return { success: true, message: "You're Entered!" };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { success: false, message: "An unexpected error occurred." };
  }
}
