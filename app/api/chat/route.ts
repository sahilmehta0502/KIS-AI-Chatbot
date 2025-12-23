import { NextResponse } from "next/server";
import { loadExcelKnowledge } from "@/lib/knowledge";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const knowledge = await loadExcelKnowledge();

    const matches = knowledge.filter(k =>
      k.Question.toLowerCase().includes(message.toLowerCase())
    );

    if (matches.length === 0) {
      return NextResponse.json({ reply: "Sorry, I don't have that information yet." });
    }

    return NextResponse.json({ reply: matches[0].Answer });
  } catch (err) {
    return NextResponse.json({ reply: "Sorry, something went wrong." }, { status: 500 });
  }
}
