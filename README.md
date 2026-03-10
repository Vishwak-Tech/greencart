# 🛒 GreenCart – MERN Stack Grocery E-Commerce Platform

GreenCart is a full-stack grocery eCommerce web application built using the **MERN Stack (MongoDB, Express.js, React, Node.js)**.
It allows users to browse products, manage carts, place orders, and provides a seller dashboard to manage products.

The project demonstrates real-world eCommerce features including authentication, cart management, order processing, and cloud image storage.

---

## 🚀 Live Demo

**Frontend:**
https://greencart-one-blue.vercel.app

**Backend API:**
https://greencart-backend-rho-six.vercel.app

---

## ✨ Features

### 👤 User Features

* User authentication (Register / Login)
* Browse products by category
* Add and remove items from cart
* Manage delivery addresses
* Place orders using **Cash on Delivery (COD)**
* View order history

### 🧑‍💼 Seller Features

* Seller authentication
* Seller dashboard
* Add new products
* Upload product images
* Manage product listings
* View customer orders

### 🛠️ Backend Features

* RESTful API architecture
* JWT authentication
* Cookie-based session handling
* MongoDB database integration
* Image storage using Cloudinary
* Secure API routes
* Order management system

---

## 🧱 Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Tailwind CSS
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Cookie Parser
* CORS

### Services

* Cloudinary (image storage)
* MongoDB Atlas (database)
* Vercel (frontend + backend deployment)

---

## 📂 Project Structure

```
GreenCart/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── assets/
│   └── package.json
│
├── backend/
│   ├── configs/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the backend folder.

```
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Frontend `.env`

```
VITE_BACKEND_URL=https://your-backend-url
```

---

## 🖥️ Installation

### 1️⃣ Clone the Repository

```
git clone https://github.com/yourusername/greencart.git
```

### 2️⃣ Install Dependencies

Backend

```
cd backend
npm install
```

Frontend

```
cd frontend
npm install
```

---

### 3️⃣ Run the Project

Backend

```
npm run server
```

Frontend

```
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

Backend runs on

```
http://localhost:4000
```

---

## 📦 API Endpoints

### User

```
POST /api/user/register
POST /api/user/login
GET  /api/user/is-auth
```

### Products

```
GET  /api/product/list
POST /api/product/add
```

### Cart

```
POST /api/cart/update
GET  /api/cart/get
```

### Orders

```
POST /api/order/place
GET  /api/order/user
GET  /api/order/seller
```

---

## 🔐 Authentication

The application uses:

* **JWT Tokens**
* **HTTP-Only Cookies**
* Protected backend routes

---

## 🚧 Future Improvements

* Online payments (Razorpay / Stripe)
* Order tracking system
* Product reviews and ratings
* Admin analytics dashboard
* Email notifications
* Inventory management

---

## 👨‍💻 Author

**Vishwak**

GitHub: https://github.com/Vishwak-Tech
