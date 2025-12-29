// lib/ai.ts
const AI_PROVIDER = process.env.AI_PROVIDER ?? "openai";

export async function generateAIResponse(prompt: string): Promise<string> {
  if (AI_PROVIDER === "openai") {
    return generateWithOpenAI(prompt);
  }
  return "AI provider is not configured.";
}

async function generateWithOpenAI(prompt: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

  if (!apiKey) return "OpenAI API key is missing.";

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content:
              "You are an AI assistant for Kenmark ITan Solutions. Answer questions using only the knowledge base provided.",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.2,
        max_tokens: 500,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("OpenAI API Error:", errText);
      return "OpenAI API error: check your key or quota.";
    }

    const data = await res.json();
    return data.choices?.[0]?.message?.content?.trim() || "No response from AI.";
  } catch (error) {
    console.error("OpenAI Fetch Error:", error);
    return "AI service is unavailable.";
  }
}


console.log("AI_PROVIDER:", process.env.AI_PROVIDER);
console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY ? "set" : "missing");
