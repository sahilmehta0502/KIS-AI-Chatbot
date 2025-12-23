"use client";

import { useState, useEffect } from "react";
import ChatBubble from "./ChatBubble";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("chat");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("chat", JSON.stringify(messages));
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;

    setMessages(m => [...m, { role: "user", text: input }]);
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    setMessages(m => [...m, { role: "bot", text: data.reply }]);

    setInput("");
    setLoading(false);
  }

  return (
    <div
      className={`fixed bottom-6 right-6 w-96 rounded-2xl shadow-2xl border overflow-hidden
      ${dark ? "bg-gray-900 text-white border-gray-700" : "bg-white border-gray-200"}`}
    >
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3">
        <h2 className="text-center font-semibold tracking-wide">
          Kenmark ITan Solutions
        </h2>
        <button
          onClick={() => setDark(!dark)}
          className="absolute right-3 top-3 text-xs bg-white/90 text-blue-700 px-2 py-0.5 rounded-md hover:bg-white"
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>

      {/* Messages */}
      <div
        className={`h-72 overflow-y-auto px-4 py-3 text-sm
        ${dark ? "bg-gray-800" : "bg-gray-50"}`}
      >
        {messages.map((m, i) => (
          <ChatBubble key={i} role={m.role} text={m.text} />
        ))}

        {loading && (
          <div className="text-xs text-gray-400 mt-2 flex items-center gap-1">
            <span className="animate-bounce">●</span>
            <span className="animate-bounce delay-100">●</span>
            <span className="animate-bounce delay-200">●</span>
            <span className="ml-1">Typing</span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className={`flex items-center gap-2 p-3 border-t
        ${dark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"}`}
      >
        <input
          className={`flex-1 rounded-lg px-3 py-2 text-sm outline-none
          ${dark
            ? "bg-gray-800 text-white border border-gray-700 placeholder-gray-400"
            : "bg-white border border-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-blue-500"}`}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask about company, services..."
          onKeyDown={e => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
