import { Link } from "react-router-dom";

export default function SiteFooter({ variant = "landing" }) {
  return (
    <footer className={`site-footer site-footer--${variant}`}>
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">🎵</span>
          <div>
            <strong>Suarasa</strong>
            <p>AI Agent Rekomendasi Musik</p>
          </div>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/">Beranda</Link>
          <Link to="/chat">Chatbot</Link>
          <a href="/#tentang">Tentang</a>
          <a href="/#tim">Tim</a>
        </nav>
        <div className="footer-meta">
          <span className="footer-handle">@SUARASA_23</span>
          <span className="footer-copy">Politeknik Caltex Riau · 2026</span>
        </div>
      </div>
    </footer>
  );
}
