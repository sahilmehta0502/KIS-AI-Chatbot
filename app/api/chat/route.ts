import { NextResponse } from "next/server";
import { loadExcelKnowledge } from "@/lib/knowledge";
import { generateAIResponse } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message?.trim()) {
      return NextResponse.json(
        { reply: "Please provide a valid message." },
        { status: 400 }
      );
    }

    const knowledge = await loadExcelKnowledge();
    const normalizedMessage = message.trim().toLowerCase();

    // Find exact or partial match in Excel
    const match = knowledge.find((k: any) => {
      if (!k || typeof k.Question !== "string") return false;
      const questionText = k.Question.trim().toLowerCase();
      return questionText === normalizedMessage; // exact match
      // For fuzzy match, use: return questionText.includes(normalizedMessage);
    });

    if (match?.Answer) {
      return NextResponse.json({ reply: match.Answer });
    }

    // Fallback to AI if no match
    const aiReply = await generateAIResponse(message);
    return NextResponse.json({ reply: aiReply });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { reply: "Sorry, something went wrong." },
      { status: 500 }
    );
  }
}
