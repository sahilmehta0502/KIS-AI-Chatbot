type Props = {
  role: "user" | "bot";
  text: string;
};

export default function ChatBubble({ role, text }: Props) {
  return (
    <div className={`my-2 flex ${role === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm leading-relaxed shadow-sm
        ${role === "user"
          ? "bg-blue-600 text-white rounded-br-none"
          : "bg-white border border-gray-200 text-gray-800 rounded-bl-none"}`}
      >
        {text}
      </div>
    </div>
  );
}
