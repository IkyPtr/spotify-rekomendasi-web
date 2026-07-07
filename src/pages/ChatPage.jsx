import { Link } from "react-router-dom";
import Chatbot from "../components/Chatbot.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import Typewriter from "../components/Typewriter.jsx";

const TYPE_WORDS = ["mood", "artis", "aktivitas", "lirik"];

export default function ChatPage() {
  return (
    <div className="chat-page">
      <div className="bg-orbs chat-orbs" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
      </div>

      <header className="chat-page-header glass-nav">
        <Link to="/" className="chat-back">
          ← Beranda
        </Link>
        <div className="chat-page-brand">
          <span className="chat-page-logo" aria-hidden="true">
            🎵
          </span>
          <div>
            <h1 className="chat-page-title">Suarasa</h1>
            <p className="chat-page-subtitle">
              Cari lagu berdasarkan{" "}
              <Typewriter words={TYPE_WORDS} speed={80} pause={1800} />
            </p>
          </div>
        </div>
        <div className="chat-page-spacer" />
      </header>

      <Chatbot />
      <SiteFooter variant="chat" />
    </div>
  );
}
