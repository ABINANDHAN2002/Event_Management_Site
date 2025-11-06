# 🎉 Event Management Site

A full-stack **MERN** (MongoDB, Express.js, React.js, Node.js) web application that allows users to explore event services, view location, and send inquiry messages which are stored in a MongoDB database.

---

## 🚀 Features

- Homepage with hero section showcasing event/party services  
- Services section listing varied event types (Birthday, Anniversary, Wedding, Camping, Game Night, Tech Innovation, Cultural, Night Party)  
- About section describing the company’s mission and team  
- Contact section with:  
  - Name, Email, Subject, Date & Time, Message fields  
  - Embedded Google Map for GN Mills, Coimbatore  
  - Submission of data to backend API and storage in MongoDB  
- Newsletter subscription field in footer  
- Fully responsive layout and smooth scroll navigation  
- Backend API with validation, error handling, data storage

---

## 🧠 Tech Stack & Dependencies

### Frontend (React)
- `react`  
- `react-dom`  
- `react-router-dom` – for routing/navigation  
- `react-icons` – for icons  
- `react-hot-toast` – for notifications  
- `axios` – for HTTP requests  
- Vite (build tool) + CSS (custom styling)  

### Backend (Node.js / Express)
- `express` – web server  
- `mongoose` – MongoDB ORM
- `validator` – for validating email and other fields  
- `cors` – to allow frontend ↔ backend communication  
- `dotenv` – for environment variables  

### Database
- MongoDB 
- You defined `MONGO_URI=mongodb://localhost:27017/eventDB`  

---
## 📁 Project Structure

Event_Management_Site/
│
├── backend/
│ ├── config/
│ │ └── config.env
│ ├── controller/
│ │ └── messageController.js
│ ├── database/
│ │ └── dbConnection.js
│ ├── models/
│ │ └── messageSchema.js
│ ├── router/
│ │ └── messageRouter.js
│ ├── app.js
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── public/
│ │ └── (images: anniversaries, parties, etc.)
│ ├── src/
│ │ ├── components/
│ │ │ ├── Navbar.jsx
│ │ │ ├── HeroSection.jsx
│ │ │ ├── Services.jsx
│ │ │ ├── About.jsx
│ │ │ ├── Contact.jsx
│ │ │ └── Footer.jsx
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── package.json
│ ├── .gitignore
│ └── README.md
│
└── README.md

---

## ⚙️ Installation & Setup

### 1. Clone the repository  
```bash
git clone https://github.com/ABINANDHAN2002/Event_Management_Site.git
cd Event_Management_Site
---
### 2. Setup Backend
cd backend
npm install
---
### Create a .env file in backend/config:

PORT=4000
MONGO_URI=mongodb://localhost:27017/eventDB
FRONTEND_URI=http://localhost:5173
---
###start backend
node server.js
### Server listens on http://localhost:4000

### 3. Setup Frontend
cd frontend
npm install
npm run dev

### 4.API Endpoint
POST /api/v1/message/send
Submits contact form data to backend.

Request Body:

{
  "name": "Your Name",
  "email": "you@example.com",
  "subject": "Event Inquiry",
  "date": "2025-11-10",
  "time": "18:30",
  "message": "I would like to book an event..."
}


Successful Response:

{
  "success": true,
  "message": "Message Sent Successfully!",
  "data": { /* message document stored in DB */ }
}



