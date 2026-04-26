"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export async function submitLeadEntry(prevState: any, formData: FormData) {
  const category = formData.get("category") as string;
  const subject = formData.get("subject") as string;
  const name = formData.get("name") as string;
  const contact_info = formData.get("contact_info") as string;
  const question_1 = formData.get("question_1") as string;
  const question_2 = formData.get("question_2") as string;
  const question_3 = formData.get("question_3") as string;

  if (!name || !contact_info || !question_1 || !question_2 || !question_3) {
    return { success: false, message: "All fields are required." };
  }

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase credentials in .env.local");
    return { success: false, message: "Server configuration error. Missing database keys." };
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // Group the category-specific questions into a JSON object
  const responses = {
    q1: question_1,
    q2: question_2,
    q3: question_3
  };

  try {
    const { error } = await supabase
      .from("leadcaptures2")
      .insert([
        { category, subject, name, contact_info, responses }
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
