"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export async function submitLeadEntry(prevState: any, formData: FormData) {
  const artist_name = formData.get("artist_name") as string;
  const contact_info = formData.get("contact_info") as string;
  const music_type = formData.get("music_type") as string;
  const last_video = formData.get("last_video") as string;
  const music_duration = formData.get("music_duration") as string;

  if (!artist_name || !contact_info || !music_type || !last_video || !music_duration) {
    return { success: false, message: "All fields are required." };
  }

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase credentials in .env.local");
    return { success: false, message: "Server configuration error. Missing database keys." };
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    const { error } = await supabase
      .from("lead_captures")
      .insert([
        { artist_name, contact_info, music_type, last_video, music_duration }
      ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, message: "Failed to submit. Please try again." };
    }

    return { success: true, message: "Thanks for reaching out! We will be in touch soon." };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { success: false, message: "An unexpected error occurred." };
  }
}
