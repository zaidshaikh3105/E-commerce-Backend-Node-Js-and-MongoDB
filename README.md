
# 🛒 E-commerce Backend with Node.js & MongoDB

This repository contains a full-featured backend for an e-commerce platform, built using **Node.js**, **Express**, and **MongoDB**. It provides essential functionality like user authentication, product management, and order processing for any e-commerce platform.

## 🚀 Features

- **User Authentication** 🔑
  - User sign-up, login, and JWT-based authentication.
  - Role-based access control (Admin/User).
  
- **Product Management** 📦
  - CRUD operations for products (Create, Read, Update, Delete).
  - Image upload support with **Multer**.
  
- **Order Processing** 🛍️
  - Cart management and checkout process.
  - Order history and order tracking for users.

- **MongoDB Integration** 💾
  - **Mongoose** for data modeling and interaction with MongoDB.

- **API Documentation** 📜
  - RESTful APIs using **Express.js**.
  - API endpoints documented with **Postman**.

## 🛠️ Tech Stack

- **Node.js** - Server-side JavaScript runtime.
- **Express.js** - Web framework for building APIs.
- **MongoDB** - NoSQL database for storing data.
- **Mongoose** - ODM for MongoDB and schema management.
- **JWT** - Token-based authentication.
- **Multer** - Middleware for file uploads.

## 🏃‍♂️ Getting Started

### Prerequisites

Make sure you have **Node.js** and **MongoDB** installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zaidshaikh3105/E-commerce-Backend-Node-Js-and-MongoDB.git
   cd E-commerce-Backend-Node-Js-and-MongoDB
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file in the root directory:

   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:

   ```bash
   npm start
   ```

### API Endpoints

- **POST** `/api/auth/signup` - Register a new user
- **POST** `/api/auth/login` - Login user
- **GET** `/api/products` - Fetch all products
- **POST** `/api/products` - Create a new product (Admin only)
- **PUT** `/api/products/:id` - Update a product (Admin only)
- **DELETE** `/api/products/:id` - Delete a product (Admin only)
- **POST** `/api/orders` - Create a new order
- **GET** `/api/orders` - Fetch all user orders


