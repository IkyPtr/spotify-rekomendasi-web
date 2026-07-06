const { StrictMode } = React;

function Header() {
    return (
        <header className="site-header">
            <div className="brand">
                <div className="brand-mark" aria-hidden="true"></div>
                <span className="brand-name">Suarasa</span>
            </div>

            <nav className="main-nav" aria-label="Navigasi utama">
                <a href="#tentang">Tentang</a>
                <a href="#fitur">Fitur</a>
                <a href="#cara-kerja">Cara kerja</a>
                <a href="#tim">Tim</a>
            </nav>

            <a className="header-cta" href="#mulai">Mulai Ngobrol</a>
        </header>
    );
}

function ChatMock() {
    return (
        <div className="chat-panel">
            <div className="chat-tab">Sesi Percakapan</div>
            <div className="chat-card">
                <div className="bubble bubble-gray"></div>
                <div className="bubble bubble-green"></div>
                <div className="bubble bubble-gray"></div>
                <div className="bubble bubble-green"></div>
            </div>
        </div>
    );
}

function Hero() {
    return (
        <section className="hero">
            <div className="hero-copy">
                <p className="eyebrow">AI Agent Rekomendasi Musik</p>

                <h1 className="hero-heading">
                    <span className="line">Ngobrol dikit,</span>
                    <span className="line">
                        <span className="script">Playlist</span>{" "}auto pas.
                    </span>
                </h1>

                <p className="hero-paragraph">
                    Suarasa paham susasana hati, aktivitas, dan konteks kamu lewat
                    percakapan biasa - lalu mencocokkan ke 900 ribu lagu di database
                    Spotify. Nggak perlu scrol, cukup cerita
                </p>

                <div className="hero-actions">
                    <a className="cta-primary" href="#mulai">Coba Chatbot Sekarang &gt;</a>
                    <a className="cta-secondary" href="#cara-kerja">Lihat cara kerjanya</a>
                </div>
            </div>

            <ChatMock />
        </section>
    );
}

function Footer() {
    return (
        <footer className="site-footer">
            <span className="footer-handle">@SUARASA_23</span>
        </footer>
    );
}

function SuarasaLanding() {
    return (
        <div className="suarasa-page">
            <Header />
            <Hero />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <SuarasaLanding />
    </StrictMode>
);
