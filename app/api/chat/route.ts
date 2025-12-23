import { NextResponse } from "next/server";
import { retrieveKnowledge } from "@/lib/knowledge";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const matches = retrieveKnowledge(message);

    if (matches.length === 0) {
      return NextResponse.json({
        reply: "Sorry, I don't have that information yet."
      });
    }

    return NextResponse.json({
      reply: matches[0].Answer
    });

  } catch (err) {
    return NextResponse.json(
      { reply: "Sorry, something went wrong." },
      { status: 500 }
    );
  }
}
