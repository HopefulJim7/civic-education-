```markdown
# 🧠 Civic Education Platform (MERN Stack)

This is a full-stack Civic Education web app designed to generate and display lessons on topics relevant to Kenyan youth. The app uses:

- ⚛️ React for the frontend
- 🌍 Node.js & Express for the backend
- 🍃 MongoDB for data persistence
- 🧪 Fallback lesson generation while OpenAI API access is offline

---

## ✨ Features

- 🔐 JWT-based user authentication
- 📘 Generate and store civic education lessons
- 🧠 Seed sample lessons into MongoDB
- 🖥️ View all saved lessons from React frontend
- 🚀 Fast setup with Vite + pnpm
- ⚡ OpenAI integration (API fallback enabled)

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/civic-education.git
cd civic-education
```

### Server setup

```bash
cd Server
pnpm install
cp .env.example .env
# Add your MongoDB URI and OpenAI API key (if needed)

pnpm dev
```

### Client setup

```bash
cd client
pnpm install
pnpm run dev
```

---

## ⚙️ Environment Variables (`/Server/.env`)

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-microlearn
JWT_SECRET=your-secret-key
OPENAI_API_KEY=sk-... (optional)
```

---

## 🧪 Seed the Database with Sample Lessons

```bash
cd Server
node seedLessons.js
```

This populates your MongoDB with 3 civic lessons:
- Democracy in Kenya
- Human Rights
- Rule of Law

---

## 🖥️ API Endpoints

| Method | Endpoint                 | Description                    |
|--------|--------------------------|--------------------------------|
| POST   | `/api/lessons/generate` | Generate a new civic lesson    |
| GET    | `/api/lessons`          | Fetch all stored lessons       |

---

## 🧩 To-Do / Next Steps

- ✅ Quiz generator from lesson content
- 📝 Editable lesson summaries
- 📊 Progress tracker per user
- 🧾 Export as PDF or printable format
- 🌍 Public participation content hub

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

---

## 🧠 Acknowledgements

Special thanks to [Jim Hope](https://github.com/your-profile) for building and shaping this platform to empower young Kenyan learners.

---

> Built with purpose and curiosity. Empowering minds through code and civics.
```

---

