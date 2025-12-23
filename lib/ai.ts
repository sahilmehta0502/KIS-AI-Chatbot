// lib/ai.ts
export async function generateAIResponse(prompt: string): Promise<string> {
  try {
    const res = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "mistral:latest",  // Ollama local model
        prompt: prompt,
        max_tokens: 500,
        temperature: 0.2
      })
    });

    const data = await res.json();

    // Ollama returns the text in `completion` (depends on version)
    return data.completion || "Sorry, I couldn't generate a response.";
  } catch (err) {
    console.error("AI Error:", err);
    return "Sorry, I couldn't generate a response.";
  }
}
