# 🤖 KIS-AI-Chatbot

**Kenmark ITan Solutions – AI Chatbot Platform**

KIS-AI-Chatbot is a modern, production-ready **AI-powered chatbot web application** built with **Next.js** and deployed on **Vercel**.  
It allows end users to interact with an AI assistant while administrators can dynamically manage chatbot knowledge using **Excel files**, stored and served via **Supabase**.

---

## 🌐 Live URLs

| Purpose | URL |
|------|-----|
| 💬 Chatbot Interface | https://kis-ai-chatbot.vercel.app/ |
| 🛠️ Admin Knowledge Panel | https://kis-ai-chatbot.vercel.app/admin |

---

## 📂 Repository

- **GitHub:** https://github.com/sahilmehta0502/KIS-AI-Chatbot

---

## ✨ Key Features

### 🧠 Knowledge Management (Admin Panel)
- Upload **Excel (.xlsx)** files to manage chatbot knowledge
- Automatic parsing of Excel data
- Knowledge updates **without redeployment**
- Secure admin-only access

### ☁️ Supabase Integration
- Supabase acts as the **central knowledge database**
- Excel-uploaded data is stored in PostgreSQL tables
- Chatbot dynamically fetches knowledge at runtime

### 🤖 AI Chat Experience
- Natural language chat interface
- AI responses enriched with Supabase knowledge
- Scalable LLM-based backend

---

## 🏗️ Tech Stack

| Layer | Technology |
|-----|-----------|
| Frontend | Next.js (React, TypeScript) |
| Backend | Next.js API Routes |
| AI | LLM (OpenAI-compatible API) |
| Database | Supabase (PostgreSQL) |
| File Upload | Excel (.xlsx) |
| Hosting | Vercel |

---

## 🧠 System Architecture

```
Admin Upload (Excel)
        ↓
 Admin Panel (/admin)
        ↓
 Excel Parsing Logic
        ↓
   Supabase Database
        ↓
 Chatbot Fetches Knowledge
        ↓
 AI Generates Response
        ↓
   User Chat Interface
```

---

## 📁 Project Structure

```
app/
 ├─ page.tsx            # Chat UI
 ├─ admin/page.tsx      # Admin panel
 ├─ api/
 │   ├─ chat/route.ts   # Chat API
 │   └─ upload/route.ts # Excel upload API

components/
lib/
public/
```

---

## 📊 Knowledge Upload Format (Excel)

The admin panel accepts **.xlsx** files with the following columns:

| Column | Description |
|------|-------------|
| category | Topic or section (e.g., About, Services, FAQ) |
| question | User question |
| answer | Chatbot response |

### Example Categories
- About
- Services
- Contact
- Website
- FAQ

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
```

⚠️ **Never commit API keys to GitHub.**

---

## 🚀 Running Locally

```bash
git clone https://github.com/sahilmehta0502/KIS-AI-Chatbot.git
cd KIS-AI-Chatbot
npm install
npm run dev
```

Visit:
- http://localhost:3000
- http://localhost:3000/admin

---

## ☁️ Supabase Storage

- Knowledge files are stored in Supabase buckets
- Example bucket: `knowledge`
- Data persists across deployments

---

## 📦 Deployment

- Hosted on **Vercel**
- Supabase ensures persistent database and storage
- Environment variables configured in Vercel dashboard

---

## 🛡️ Security Notes

- Restrict admin routes using authentication
- Protect Supabase keys
- Use Row Level Security (RLS) in Supabase

---


