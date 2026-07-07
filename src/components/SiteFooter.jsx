import { Link } from "react-router-dom";

const SECTIONS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Tools", href: "#tools" },
  { label: "Tim", href: "#tim" },
];

const GITHUB_URL = "https://github.com/IkyPtr/spotify-rekomendasi-web";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-brand-link">
            <div className="footer-logo-mark" aria-hidden="true" />
            <div>
              <strong>Suarasa</strong>
              <p>AI Agent Rekomendasi Musik</p>
            </div>
          </Link>
          <a
            className="footer-github"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Repository"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt=""
              className="footer-github-icon"
            />
            <span>GitHub Repository</span>
          </a>
        </div>

        <nav className="footer-col footer-nav" aria-label="Navigasi footer">
          <h4>Navigasi</h4>
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.href}>
                <a href={s.href}>{s.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col footer-address">
          <h4>Institusi</h4>
          <address>
            Politeknik Caltex Riau
            <br />
            Jl. Negeri Para Pak-Pak, Sukajadi
            <br />
            Pekanbaru, Riau 28288
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 Suarasa — Capstone Project Teknik Informatika</span>
        <span className="footer-handle">@SUARASA_23</span>
      </div>
    </footer>
  );
}
