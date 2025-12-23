import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const file = data.get("file") as File;

    if (!file) return NextResponse.json({ success: false, message: "No file uploaded" });

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Supabase Storage
    const { error } = await supabase.storage
      .from("knowledge")
      .upload("knowledge.xlsx", buffer, { upsert: true });

    if (error) {
      console.error("Supabase upload error:", error.message);
      return NextResponse.json({ success: false, message: error.message });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Upload API error:", err);
    return NextResponse.json({ success: false, message: "Upload failed" });
  }
}
