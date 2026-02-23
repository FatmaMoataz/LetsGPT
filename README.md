# LetsGPT – Lets Chat Smarter 💬🤖

A full‑stack AI chat application that enables users to have intelligent, real‑time conversations with an AI assistant. Built with a modern React + Vite frontend and a Node.js + Express backend, integrated with OpenAI APIs and additional services for authentication, payments, and media handling.

---

## 🚀 Features

* 🔐 User authentication (JWT‑based)
* 💬 Real‑time chat interface
* 🤖 AI responses via OpenAI API
* 🧾 Markdown & code highlighting in messages
* 🌙 Modern responsive UI with TailwindCSS
* ☁️ Image upload support (ImageKit)
* 💳 Payment integration (Stripe)
* 📡 REST API with Express & MongoDB

---

## 🧱 Tech Stack

### Frontend

* React 19
* Vite
* TailwindCSS 4
* React Router
* Axios
* React Markdown
* PrismJS (code highlighting)
* React Hot Toast
* Moment.js

### Backend

* Node.js (ES Modules)
* Express 5
* MongoDB + Mongoose
* JWT Authentication
* BcryptJS
* OpenAI SDK
* Stripe
* ImageKit
* Svix (webhooks)
* CORS + Dotenv

---

## 📂 Project Structure

```
LetsGPT/
│
├── client/                # React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/                # Node backend
│   ├── configs/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/LetsGPT.git
cd LetsGPT
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create `.env` file in `/server`:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
OPENAI_API_KEY=your_openai_key
STRIPE_SECRET_KEY=your_stripe_key
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_endpoint
SVIX_SECRET=your_svix_secret
```

Run backend:

```bash
npm run server
```

---

### 3️⃣ Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

Backend runs on:

```
http://localhost:3000
```

---

## 🔑 Environment Variables

### Server

* `PORT` – backend port
* `MONGO_URI` – MongoDB connection
* `JWT_SECRET` – auth secret
* `OPENAI_API_KEY` – OpenAI access
* `STRIPE_SECRET_KEY` – payments
* `IMAGEKIT_*` – image upload
* `SVIX_SECRET` – webhook verification

---

## 📡 API Overview

### Auth

* `POST /api/user/register`
* `POST /api/user/login`

### User

* `GET /api/user/data`
* `GET /api/user/published-images`

### Chat

* `GET /api/chat/create`
* `GET /api/chat/get`

### Message

* `POST /api/message/text`
* `POST /api/message/image`

### Credits

* `GET /api/credit/plan`
* `POST /aapi/credit/purchase`

---

## 🖥️ UI Highlights

* Chat bubbles with Markdown rendering
* Syntax‑highlighted code blocks
* Loading & typing states
* Toast notifications
* Mobile responsive layout

---

## 🧪 Scripts

### Client

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Server

```bash
npm run server
npm start
```

---

## 🚀 Deployment

### Frontend & Backend

* Vercel

Make sure to configure environment variables in deployment dashboard.

---

## 📸 Screen Record

[![video](https://github.com/user-attachments/assets/09a6990c-a6a4-44f3-8e80-df36e0fe0737)](https://github.com/user-attachments/assets/ac30e604-fb1c-4d53-980c-32e17ae72035)

---

## 📜 License

MIT License © 2026 Fatma Moataz

---

## ⭐ Future Improvements

* Streaming AI responses
* Chat history persistence per user
* Multi‑conversation threads
* Voice input
* File upload chat context

---

## ❤️ Acknowledgments

* OpenAI
* Stripe
* ImageKit
* React & Node.js community

---

**LetsGPT – Lets Chat Smarter 🚀**
