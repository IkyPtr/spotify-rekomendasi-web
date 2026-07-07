import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "../App.css";

const API_URL = "https://rezkiptr-spotify-rekomendasi-api.hf.space/chat";

const EXAMPLES = [
  "Berikan 5 lagu dari Coldplay",
  "Lagu cocok buat berkendara pagi",
  "Aku sedang sedih, butuh 5 lagu",
  "Lagu yang mirip dengan Shape of You",
  "Musik untuk belajar malam",
];

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Halo! Saya **Suarasa** 🎵\n\nSaya bisa membantu kamu menemukan lagu berdasarkan:\n- Mood atau perasaan kamu\n- Aktivitas (berkendara, belajar, olahraga)\n- Artis favorit\n- Lirik lagu\n- Lagu yang mirip dengan lagu tertentu\n\nCoba tanya sesuatu!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, k: 5 }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response ?? "Tidak ada respons." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Maaf, terjadi error. Coba lagi ya! 😔",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-app">
      <main className="chat-main">
        {messages.map((msg, i) => (
          <div key={i} className={`msg-wrap ${msg.role}`}>
            <div className={`msg-bubble ${msg.role}`}>
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}

        {loading && (
          <div className="msg-wrap assistant">
            <div className="msg-bubble assistant loading">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </main>

      {messages.length === 1 && (
        <div className="chat-examples">
          {EXAMPLES.map((ex, i) => (
            <button
              key={i}
              className="example-btn"
              onClick={() => sendMessage(ex)}
            >
              {ex}
            </button>
          ))}
        </div>
      )}

      <footer className="chat-footer">
        <div className="input-wrap">
          <textarea
            className="chat-input"
            rows={1}
            placeholder="Tanya sesuatu tentang musik..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            disabled={loading}
          />
          <button
            className="send-btn"
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
          >
            ➤
          </button>
        </div>
        <p className="chat-hint">
          Enter untuk kirim • Shift+Enter untuk baris baru
        </p>
      </footer>
    </div>
  );
}
