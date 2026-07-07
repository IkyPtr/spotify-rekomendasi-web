import { Link } from "react-router-dom";
import Chatbot from "../components/Chatbot.jsx";

export default function ChatPage() {
  return (
    <div className="chat-page">
      <header className="chat-page-header">
        <Link to="/" className="chat-back">
          ← Beranda
        </Link>
        <div className="chat-page-brand">
          <span className="chat-page-logo" aria-hidden="true">
            🎵
          </span>
          <div>
            <h1 className="chat-page-title">Suarasa</h1>
            <p className="chat-page-subtitle">AI Agent Rekomendasi Musik</p>
          </div>
        </div>
        <div className="chat-page-spacer" />
      </header>
      <Chatbot />
    </div>
  );
}
