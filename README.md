# MindBlog – Futuristic Tech Blog Platform

MindBlog is a modern futuristic blog web application built with **React and pure CSS**.  
It features a cyber-themed UI, article reading experience, saved blogs, reading progress bar, typing effects, and toast notifications.

This project is designed as a **portfolio-level full-stack front-end application** to demonstrate React, state management, UI/UX design, and modern web development practices.

---

## 🚀 Features

### 📰 Blog System
- Blog listing with categories and author info  
- Full article reading page  
- Medium-style reading progress bar  
- Typing animation for quotes  

### 💾 Saved Blogs
- Save and remove blogs  
- Persistent storage using `localStorage`  
- Dedicated **Saved Blogs** page  

### 🔔 Toast Notifications
- Blog saved / removed notifications  
- Glassmorphism futuristic toast UI  

### 🎨 Futuristic UI
- Glassmorphism components  
- Neon cyan gradients  
- Smooth animations and transitions  
- Responsive design (Mobile + Desktop)  

### ⚡ Performance Optimizations
- Scroll performance optimized using `requestAnimationFrame`  
- No Tailwind or heavy UI frameworks  
- Pure CSS for fast rendering  

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|--------|
| React | Frontend Framework |
| JavaScript (ES6+) | Application Logic |
| CSS3 | Styling (No Tailwind) |
| Lucide Icons | UI Icons |
| LocalStorage | Saved blogs persistence |
| Vite / React Scripts | Development Server |

---

## 📂 Project Structure

src/
├─ components/
│ ├─ Navbar.jsx
│ ├─ Home.jsx
│ ├─ About.jsx
│ ├─ Labs.jsx
│ ├─ ArticleDetail.jsx
│ ├─ Footer.jsx
│ ├─ ReadingProgress.jsx
│ ├─ Toast.jsx
│ └─ TypingQuote.jsx
│
├─ data/
│ └─ blogPosts.js
│
├─ styles/
│ ├─ App.css
│ ├─ Navbar.css
│ ├─ Home.css
│ ├─ ArticleDetail.css
│ ├─ Footer.css
│ └─ theme.css
│
├─ App.jsx
├─ main.jsx
└─ app.css
