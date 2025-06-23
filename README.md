# 🧠 Multi-Step Registration Form – React Hook Form + React Router

This project is a **multi-step user registration form** built with:

- ✅ **React Hook Form** – for form state, validation, and performance
- ✅ **React Router v6.4+** – using `useFetcher()` and `action()` for progressive form submissions and server logic
- ✅ **React Context API** – to manage form state across steps
- ✅ **React Router Loader & Action API** – for preloading data and handling form logic without page refresh

---


## 🚀 Live Demo

> [Link to your deployed project (Netlify/Vercel)](https://your-deployment-link.com)

---

## ✨ Features

- Multi-step registration form (2 steps)
- Validation using `react-hook-form`
- Form state persisted using React Context
- Real-time UX with `useFetcher` (AJAX-style form handling)
- Submission status displayed (`submitting`, `idle`)
- Final review page before submitting
- Clean and modern structure with reusable components


---

## 🧪 Features

- ✅ Multi-step form navigation (Step 1, Step 2, Review)
- ✅ Field validation and error messages
- ✅ Centralized form state using Context API
- ✅ Backend-like form handling using `action()` functions
- ✅ Non-navigating form submission with `useFetcher`
- ✅ Loading indicators and form UX enhancements
- ✅ Easily extendable for file uploads or dynamic fields

---


## 🧱 Tech Stack

- React 18
- React Router v6.4+
- React Hook Form
- Context API
- Tailwind CSS (optional for UI)
- Vite (or CRA) as build tool


---

## 📚 What I Learned

### 📌 1. React Hook Form (`useForm`)
- Simple API to manage form values and validation
- Great performance due to uncontrolled inputs
- Custom validation with helpful error handling
- Works perfectly with complex/multi-step forms
- Supports dynamic fields with `useFieldArray` (future goal)

### 📌 2. React Router `useFetcher()`
- Allows **AJAX-style form submission** without navigation
- Supports loading/submitting states (`fetcher.state`)
- Can send data to any `action()` handler without leaving the page
- Ideal for inline edits, partial saves, or form previews

### 📌 3. React Router `action()`
- Server-style logic handler for forms (like Express routes)
- Used to parse `FormData`, validate, or save to a database
- Keeps form logic outside the component (clean separation)
- Works seamlessly with `<Form>` and `useFetcher().submit()`

---

## 🗂️ Project Structure

src/
├── components/
│ ├── Step1.jsx
│ └── Step2.jsx
├── context/
│ └── FormContext.jsx
├── pages/
│ ├── Registration.jsx
│ └── Review.jsx
├── routes/
│ └── registration.js
├── App.jsx
└── main.jsx
---

## 🚀 How to Run

```bash
# Clone this repo
git clone https://github.com/YOUR_USERNAME/multistep-registration-form.git
cd multistep-registration-form

# Install dependencies
npm install

# Start dev server
npm run dev
