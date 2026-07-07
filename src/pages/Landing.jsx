import { Link } from "react-router-dom";

const PIPELINE = [
  {
    step: "01",
    title: "Query Pengguna",
    desc: "Kamu menulis pertanyaan dalam Bahasa Indonesia — mood, artis, aktivitas, atau lirik.",
    tool: "React + Vite",
  },
  {
    step: "02",
    title: "Text Normalization",
    desc: "Teks dibersihkan dan distandarisasi agar siap diproses NLP.",
    tool: "Python (Rule-based)",
  },
  {
    step: "03",
    title: "Intent Detection",
    desc: "Sistem mengenali 6 intent: artis, mood, aktivitas, similar song, lirik, dan out-of-domain.",
    tool: "RapidFuzz",
  },
  {
    step: "04",
    title: "Sentence Embedding",
    desc: "Query diubah menjadi vektor numerik 384 dimensi untuk pencarian semantik.",
    tool: "all-MiniLM-L6-v2",
  },
  {
    step: "05",
    title: "Semantic Search",
    desc: "Vektor dicocokkan dengan 497.942 lagu di database menggunakan similarity search.",
    tool: "FAISS IndexFlatIP",
  },
  {
    step: "06",
    title: "RAG Context Injection",
    desc: "Lagu teratas diinjeksikan sebagai konteks agar respons akurat dan relevan.",
    tool: "Prompt Engineering",
  },
  {
    step: "07",
    title: "Response Generation",
    desc: "Template deterministik menghasilkan rekomendasi + link Spotify & YouTube — tanpa halusinasi.",
    tool: "FastAPI",
  },
];

const FEATURES = [
  "Pencarian lagu berdasarkan nama artis — contoh: \"Berikan 10 lagu dari The Weeknd\"",
  "Rekomendasi berdasarkan mood — contoh: \"Aku sedang sedih, butuh lagu\"",
  "Rekomendasi berdasarkan aktivitas — contoh: \"Lagu cocok buat berkendara\"",
  "Mencari lagu serupa — contoh: \"Lagu yang mirip dengan Shape of You\"",
  "Identifikasi lagu dari potongan lirik yang kamu paste",
  "Penolakan pertanyaan di luar konteks musik (out-of-domain rejection)",
];

const CHATBOX_STEPS = [
  {
    num: "1",
    title: "Buka halaman Chat",
    desc: "Klik tombol \"Mulai Ngobrol\" dari beranda untuk masuk ke halaman percakapan.",
  },
  {
    num: "2",
    title: "Tulis pertanyaanmu",
    desc: "Ketik kebutuhan musikmu dalam bahasa Indonesia — bebas, seperti ngobrol biasa.",
  },
  {
    num: "3",
    title: "AI memproses query",
    desc: "Sistem mendeteksi intent, melakukan semantic search, dan mencari lagu terbaik.",
  },
  {
    num: "4",
    title: "Dapatkan rekomendasi",
    desc: "AI menampilkan daftar lagu lengkap dengan link Spotify dan YouTube.",
  },
];

const TOOLS = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
  { name: "FAISS", icon: "https://upload.wikimedia.org/wikipedia/commons/7/78/Artificial_neural_network.svg" },
  { name: "HuggingFace", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "Spotify", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const TEAM = [
  { name: "Rezki Saputra", role: "Backend & NLP", github: "IkyPtr" },
  { name: "Mohd. Arifin Ramadhan", role: "Frontend", github: "ArifinRamadhan" },
  { name: "Randy Gustian", role: "Data & Evaluasi", github: null },
];

function Navbar() {
  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <div className="brand-mark" aria-hidden="true" />
        <span className="brand-name">Suarasa</span>
      </Link>

      <nav className="main-nav" aria-label="Navigasi utama">
        <a href="#tentang">Tentang</a>
        <a href="#fitur">Fitur</a>
        <a href="#cara-kerja">Cara Kerja</a>
        <a href="#tools">Tools</a>
        <a href="#tim">Tim</a>
      </nav>

      <Link to="/chat" className="header-cta">
        Mulai Ngobrol
      </Link>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="beranda">
      <div className="hero-copy">
        <div className="hero-logo-wrap">
          <div className="hero-logo" aria-hidden="true">
            🎵
          </div>
          <p className="eyebrow">AI Agent Rekomendasi Musik</p>
        </div>

        <h1 className="hero-heading">
          <span className="line">Ngobrol dikit,</span>
          <span className="line">
            <span className="script">Playlist</span> auto pas.
          </span>
        </h1>

        <p className="hero-paragraph">
          <strong>Suarasa</strong> adalah AI Agent yang memahami suasana hati,
          aktivitas, dan konteks kamu lewat percakapan — lalu mencocokkan ke
          900 ribu+ lagu di database Spotify.
        </p>

        <div className="hero-actions">
          <Link to="/chat" className="cta-primary">
            Mulai Ngobrol →
          </Link>
          <a href="#tentang" className="cta-secondary">
            Pelajari lebih lanjut
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-visual-card">
          <div className="hero-visual-icon">🤖</div>
          <h3>Suarasa AI Agent</h3>
          <p>Powered by RAG + NLP + Semantic Search</p>
          <Link to="/chat" className="hero-visual-btn">
            Buka Chatbot
          </Link>
        </div>
      </div>
    </section>
  );
}

function Tentang() {
  return (
    <section className="section" id="tentang">
      <div className="section-inner">
        <p className="section-eyebrow">Tentang AI Agent</p>
        <h2 className="section-title">Dari query hingga rekomendasi lagu</h2>
        <p className="section-desc">
          Suarasa dibangun dengan pendekatan{" "}
          <strong>Retrieval-Augmented Generation (RAG)</strong> dan{" "}
          <strong>Natural Language Processing</strong>. Berikut alur lengkap
          sistem dari awal hingga akhir:
        </p>

        <div className="pipeline">
          {PIPELINE.map((item, i) => (
            <article key={item.step} className="pipeline-item">
              <div className="pipeline-marker">
                <span className="pipeline-step">{item.step}</span>
                {i < PIPELINE.length - 1 && <span className="pipeline-line" />}
              </div>
              <div className="pipeline-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="pipeline-tool">{item.tool}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fitur() {
  return (
    <section className="section section-alt" id="fitur">
      <div className="section-inner">
        <p className="section-eyebrow">Fitur</p>
        <h2 className="section-title">Apa saja yang bisa Suarasa lakukan?</h2>
        <ul className="feature-list">
          {FEATURES.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CaraKerja() {
  return (
    <section className="section" id="cara-kerja">
      <div className="section-inner">
        <p className="section-eyebrow">Cara Chatbox Bekerja</p>
        <h2 className="section-title">Empat langkah mudah</h2>
        <div className="steps steps--four">
          {CHATBOX_STEPS.map((s) => (
            <article key={s.num} className="step-card">
              <span className="step-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
        <div className="section-cta-wrap">
          <Link to="/chat" className="cta-primary">
            Coba Sekarang →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section className="section section-alt" id="tools">
      <div className="section-inner">
        <p className="section-eyebrow">Tech Stack</p>
        <h2 className="section-title">Tools yang kami gunakan</h2>
        <p className="section-desc">
          Sepuluh teknologi utama dalam pembuatan AI Agent Suarasa — dari
          backend NLP hingga frontend dan deployment.
        </p>
        <div className="tools-grid">
          {TOOLS.map((t) => (
            <article key={t.name} className="tool-card">
              <img src={t.icon} alt="" className="tool-icon" loading="lazy" />
              <span className="tool-name">{t.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tim() {
  return (
    <section className="section" id="tim">
      <div className="section-inner">
        <p className="section-eyebrow">Our Team</p>
        <h2 className="section-title">Tim pengembang Suarasa</h2>
        <p className="section-desc">
          Proyek capstone mahasiswa Politeknik Caltex Riau — Jurusan Teknik
          Informatika.
        </p>
        <div className="team-grid">
          {TEAM.map((m) => (
            <article key={m.name} className="team-card">
              <div className="team-avatar" aria-hidden="true">
                {m.name.charAt(0)}
              </div>
              <h3>{m.name}</h3>
              <p className="team-role">{m.role}</p>
              {m.github && (
                <a
                  className="team-link"
                  href={`https://github.com/${m.github}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{m.github}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-handle">@SUARASA_23</span>
      <span className="footer-copy">
        Politeknik Caltex Riau &middot; 2026
      </span>
    </footer>
  );
}

export default function Landing() {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Tentang />
      <Fitur />
      <CaraKerja />
      <Tools />
      <Tim />
      <Footer />
    </div>
  );
}
