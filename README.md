![alt text](frontend/public/image.png)

# E-commerce MERN Stack Application - Forever Clone

    This project is an e-commerce web application built using the MERN (MongoDB, Express, React, Node.js) stack. It includes three major components:

    Admin Panel: Allows administrators to manage orders and products.

    Backend: Provides APIs and database management.

    Frontend/UI: Enables users to browse, order products, and view order status.


# Features

## Admin Panel

    View, add, update, and delete products.

    Manage orders: update order status, cancel orders, etc.

    Dashboard to view key metrics (e.g., total orders, revenue).

## Backend

    RESTful APIs for product management, order processing, and user authentication.

    MongoDB for database storage.

    JWT-based user authentication.

    Secure and scalable architecture.

## Frontend/UI

    User-friendly interface for browsing and ordering products.

    Shopping cart functionality.

    User registration and login.

    Order history and status tracking.

# Installation

## Clone the Repository:

    git clone https://github.com/veeraj2404/Ecommerce-app.git
    cd Ecommerce-app

## Install Dependencies:

Navigate to the frontend, backend and admin directories and install dependencies:

    cd frontend
    npm install

    cd backend
    npm install

    cd admin
    npm install

## Set Up Environment Variables:

Create a .env file in the backend directory and add:

    PORT=
    MONGODB_URI=
    CLOUDINARY_API_KEY=
    CLOUDINARY_SECRET_KEY=
    CLOUDINARY_NAME=
    JWT_SECRET=
    ADMIN_EMAIL=
    ADMIN_PASSWORD=
    STRIPE_SECRET_KEY=

Create a .env file in the frontend and admin directory and add:

    VITE_BACKEND_URL="http://localhost:3000"

## Run the Application:

    cd backend
    npm start

    cd frontend
    npm run dev

    cd admin
    npm run dev

Access the Application:

    Frontend: http://localhost:5173
    Admin: http://localhost:5174
    Backend: http://localhost:3000