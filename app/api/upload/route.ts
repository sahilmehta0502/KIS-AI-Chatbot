import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file") as File;

  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(process.cwd(), "public", "knowledge.xlsx");

  fs.writeFileSync(filePath, buffer);
  return NextResponse.json({ success: true });
}
