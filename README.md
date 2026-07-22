# 🎓 LMS Frontend

A modern, fully responsive **Learning Management System** frontend built with **React.js** — featuring course browsing, JWT authentication, wishlist management, and a student dashboard.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Bootstrap](https://img.shields.io/badge/React_Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Uiverse](https://img.shields.io/badge/Uiverse.io-FF6B6B?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyeiIvPjwvc3ZnPg==&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 🌐 Live Demo

👉 **[View Live Site](https://lms-frontend-seven-lilac.vercel.app/)**

---

## ✨ Features

- 👤 User Registration and Login
- 🔐 JWT Authentication (token-based security)
- 📚 Course browsing and filtering
- 🔥 Trending, Popular and New course sections
- ❤️ Add / Remove courses from Wishlist
- 🎓 Student Dashboard
- 📱 Fully Responsive Design — works on all screen sizes
- 🎨 UI components sourced from **Uiverse.io**
- 🔒 Password strength checker
- 👁️ Show / Hide password toggle

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend framework |
| JavaScript (ES6+) | Core logic |
| Styled Components | Component-level styling |
| React Bootstrap | UI component library |
| Axios | API calls to backend |
| React Router DOM | Client-side routing |
| React Icons | Icon library |
| Uiverse.io | Ready-made UI components |
| Vercel | Deployment & hosting |

---

## 📄 Pages

| Page | Description |
|---|---|
| 🏠 Homepage | Hero section with course slider |
| 📝 Sign Up | User registration with password strength checker |
| 🔑 Sign In | Login with JWT authentication |
| 🎓 Student Dashboard | Personal learning overview |
| 📚 Course Listing | Browse and filter all courses |
| 🗂️ Categories | Browse courses by category |
| ❤️ Wishlist | Saved / bookmarked courses |

---

## 🔗 Backend API

This frontend connects to a live REST API backend:

| Detail | Value |
|---|---|
| 🌐 Backend URL | `https://lms-backend-production-ada7.up.railway.app` |
| 🗄️ Database | MongoDB Atlas |
| 🚀 Hosted on | Railway |

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/aqsaishtiaq19/lms-frontend.git

# Navigate to project folder
cd lms-frontend

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=https://lms-backend-production-ada7.up.railway.app
```

---

## 📁 Project Structure

```
lms-frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Courses.jsx
│   │   ├── Categories.jsx
│   │   └── Wishlist.jsx
│   ├── App.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🔗 Related Repository

⚙️ **Backend Repository** → [lms-backend](https://github.com/aqsaishtiaq19/lms-backend)
🌐 **Backend Live API** → `https://lms-backend-production-ada7.up.railway.app`

---

## 👩‍💻 Developer

**Aqsa Ishtiaq**

- 🌐 GitHub: [@aqsaishtiaq19](https://github.com/aqsaishtiaq19)
- 💼 LinkedIn: [Aqsa Ishtiaq](https://www.linkedin.com/in/aqsa-ishtiaq)
- 🏅 Certiport IT Specialist – JavaScript *(Pearson VUE, 140+ countries)*
- 🤖 Microsoft Learn — AI Concepts for Developers *(June 2026)*

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
