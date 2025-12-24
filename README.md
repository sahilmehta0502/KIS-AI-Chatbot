# 🤖 KIS-AI-Chatbot

**Kenmark ITan Solutions – AI Chatbot Platform**

KIS-AI-Chatbot is a modern **AI-powered chatbot web application** built with **Next.js** and deployed on **Vercel**.  
It enables users to interact with an AI assistant, while administrators can **upload and update knowledge using Excel files**, which are stored in **Supabase** and dynamically fetched by the chatbot.

---

## 🌐 Live Application

| Purpose | URL |
|------|-----|
| 💬 Chatbot Interface | https://kis-ai-chatbot.vercel.app/ |
| 🛠️ Admin Knowledge Panel | https://kis-ai-chatbot.vercel.app/admin |

---

## ✨ Key Features 

### 🧠 Knowledge Management (Admin Panel)
- Upload **Excel (.xlsx)** files to update chatbot knowledge  
- Data is parsed and stored in **Supabase**  
- No redeployment required after updating knowledge  

### ☁️ Supabase Integration
- Supabase acts as the **central knowledge database**  
- Uploaded Excel data is stored in Supabase tables  
- Chatbot fetches data from Supabase to generate responses  

---

## 🏗️ Tech Stack

| Layer | Technology |
|-----|-----------|
| Frontend | Next.js (React, TypeScript) |
| AI | LLM Integration |
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
 Chatbot Fetches Data
        ↓
 AI Generates Response
        ↓
   User Chat UI
```

---

## 📁 Project Structure (Simplified)

```
app/
 ├─ page.tsx
 ├─ admin/page.tsx
 ├─ api/
 │   ├─ chat/route.ts
 │   └─ upload/route.ts

components/
lib/
public/
```

---

## 📊 Knowledge Upload Format (Excel)

The admin panel accepts an Excel (.xlsx) file with the following columns:

| Column | Description |
|------|-------------|
| category | Topic or section (e.g., About, Services, FAQ) |
| question | User query or prompt |
| answer | Chatbot response |

### Example Categories
- About  
- Services  
- Contact  
- Website  
- FAQ  

---

## 🔐 Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

```

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

## 📦 Deployment

Deployed on **Vercel**.  
Supabase persists data across deployments.

---
