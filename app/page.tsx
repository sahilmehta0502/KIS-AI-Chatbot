import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Kenmark ITan Solutions
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
          Your trusted partner for IT consulting, AI solutions, and corporate training. Ask our assistant below to learn more.
        </p>
      </section>

      {/* Decorative Background Circles */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-blue-200 rounded-full opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-[-150px] right-[-100px] w-96 h-96 bg-indigo-200 rounded-full opacity-30 pointer-events-none"></div>

      {/* Chat Widget */}
      <ChatWidget />
    </main>
  );
}
