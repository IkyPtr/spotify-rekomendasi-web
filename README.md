# 🎵 Music AI Agent — SpotifyRekomendasi

Sistem rekomendasi musik berbasis **AI Agent** yang menggunakan pendekatan
**Retrieval-Augmented Generation (RAG)** dan **Natural Language Processing (NLP)**
untuk memberikan rekomendasi lagu melalui percakapan bahasa alami.

![Status](https://img.shields.io/badge/status-live-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Python](https://img.shields.io/badge/Python-3.10-blue)
![React](https://img.shields.io/badge/React-19-61dafb)

---

## 🌐 Demo

**Web App:** https://spotify-rekomendasi-web.vercel.app

**API Endpoint:** https://rezkiptr-spotify-rekomendasi-api.hf.space/docs

---

## ✨ Fitur

- 🔍 **Pencarian lagu by artis** — "berikan 10 lagu dari The Weeknd"
- 🎭 **Rekomendasi by mood** — "aku sedang sedih, butuh lagu"
- 🚗 **Rekomendasi by aktivitas** — "lagu cocok buat berkendara"
- 🎵 **Similar song** — "lagu yang mirip dengan Shape of You"
- 📝 **Identifikasi dari lirik** — paste potongan lirik, sistem tebak lagunya
- 🚫 **Out-of-domain rejection** — sistem menolak pertanyaan di luar konteks musik

---

## 🏗️ Arsitektur Sistem
User Query (Bahasa Indonesia)
↓
Intent Detection (Rule-based, 6 intent)
↓
Semantic Search / FAISS
↓
Response Generation (Template deterministik)
↓
Rekomendasi Lagu + Link Spotify & YouTube

### Pipeline NLP (7 Metode):
| # | Metode | Implementasi |
|---|--------|-------------|
| 1 | Text Normalization | Rule-based |
| 2 | Feature Concatenation | Template `build_document()` |
| 3 | Sentence Embedding | `all-MiniLM-L6-v2` (384 dim) |
| 4 | Intent Detection | Rule-based + RapidFuzz |
| 5 | Semantic Search | FAISS `IndexFlatIP` |
| 6 | Prompt Engineering | RAG context injection |
| 7 | Response Generation | Template deterministik |

---

## 🛠️ Tech Stack

**Backend:**
- Python 3.10
- FastAPI + Uvicorn
- Sentence-Transformers (`all-MiniLM-L6-v2`)
- FAISS (Facebook AI Similarity Search)
- RapidFuzz
- Pandas + PyArrow
- HuggingFace Spaces (Docker)

**Frontend:**
- React 19 + Vite
- React Markdown
- Vercel

**Dataset:**
- Spotify 900K+ Songs Dataset (Kaggle)
- 497.942 lagu setelah cleaning
- HuggingFace Dataset Repository

---

## 📊 Evaluasi

| Metrik | Hasil |
|--------|-------|
| Intent Detection Accuracy | ~84% |
| Retrieval Precision@5 | ~43% |
| Response Hallucination | 0% (template deterministik) |

---

## 🚀 Cara Jalankan Lokal

### Backend
```bash
git clone https://huggingface.co/spaces/RezkiPTR/spotify-rekomendasi-api
cd spotify-rekomendasi-api
pip install -r requirements.txt
uvicorn app:app --reload
```

### Frontend
```bash
git clone https://github.com/IkyPtr/spotify-rekomendasi-web
cd spotify-rekomendasi-web
npm install
npm run dev
```

---

## 👥 Tim Pengembang

| Nama | GitHub | Institusi |
|------|--------|-----------|
| Rezki Saputra | [@IkyPtr](https://github.com/IkyPtr) | Politeknik Caltex Riau |
| Mohd. Arifin Ramadhan | [@ArifinRamadhan](https://github.com/ArifinRamadhan) | Politeknik Caltex Riau |
| Randy Gustian | — | Politeknik Caltex Riau |

---

## 📄 Lisensi

MIT License © 2026 — Politeknik Caltex Riau