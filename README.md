# 📘 Full Stack React + Node API Assignment

This is a simple full-stack application built with **React (CRA) + Chakra UI** on the frontend and **Node.js + Express** on the backend.

It allows users to submit their personal information (first name, last name, date of birth), which is stored temporarily in backend memory and displayed along with their calculated age and a random dog image.

---

## 📁 Project Structure

```
.
├── client/   → React + Chakra UI frontend
└── server/   → Express backend (no DB, stores data in variable)
```

---

## 🚀 Features

- Form with validation (first name, last name, DOB)
- Age calculated from date of birth
- Random dog image as profile picture
- Styled with Chakra UI + glassmorphic effect
- Responsive and mobile-friendly UI
- Error handling and loading state

---

## 🧠 Tech Stack

**Frontend**
- React (Create React App)
- Chakra UI
- Axios
- React Router

**Backend**
- Node.js
- Express.js
- CORS middleware

---

## 🔧 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/kiranwankhade/algoocean_assignment.git
cd algoocean_assignment
```

---

### 2️⃣ Install Dependencies

#### Backend
```bash
cd server
npm install
npm start
```

Backend will run on: `http://localhost:8000`

#### Frontend
```bash
cd client
npm install
npm start
```

Frontend will run on: `http://localhost:3000`

> ✅ Make sure your backend is running before submitting the form.

---

## 📸 Screenshots

> You can add screenshots here. For example:

<details>
  <summary>Form Page</summary>
  <img src="screenshots/form-page.png" alt="Form Page" width="600"/>
</details>

<details>
  <summary>Display Page</summary>
  <img src="screenshots/display-page.png" alt="Display Page" width="600"/>
</details>

---

## 📝 API Endpoints

### `POST /api/user`
Saves user data in memory.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "dob": "1990-01-01"
}
```

---

### `GET /api/user`
Returns the latest saved user:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "dob": "1990-01-01"
}
```

---

## 🌐 Optional Live Demo

- Backend deployed on: `https://algoocean-assignment.onrender.com`
- Frontend deployed on: `https://your-frontend.vercel.app`

---

## 👨‍💻 Author

**Kiran Wankhade**  
GitHub: [@your-username](https://github.com/kiranwankhade)  
Email: kiranwankhade7738@gmail.com

---
