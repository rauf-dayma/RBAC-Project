# **Role-Based Authorization Control Project**

This project implements a **role-based authorization system** using **Node.js**, **Express**, **MongoDB**, and **JWT**. It securely restricts API access based on user roles (`admin`, `moderator`, and `user`).

---

## **Features**
- **User Registration and Login**
- **Role-Based Access Control**: Only users with specific roles can access certain routes.
- **Middleware for Token Verification and Role Authorization**
- **Secure Password Storage** with bcrypt hashing
- **JWT Authentication**

---

## **Tech Stack**

### **Backend**
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for creating RESTful APIs.
- **MongoDB**: NoSQL database for storing users and roles.
- **Mongoose**: ODM (Object Data Modeling) for MongoDB.
- **JWT (JSON Web Tokens)**: For user authentication and authorization.

---

## **Prerequisites**
- **Node.js** (v14 or later)
- **MongoDB** (Local or cloud instance)

---

## **Project Structure**

project/ ├── controllers/ │ ├── authController.js │ └── roleController.js ├── middleware/ │ ├── authMiddleware.js │ └── roleMiddleware.js ├── models/ │ ├── userModel.js │ └── roleModel.js ├── routes/ │ ├── authRoutes.js │ └── roleRoutes.js ├── config/ │ └── dbConfig.js ├── .env ├── app.js └── package.json


npm install express mongoose bcrypt jsonwebtoken dotenv cors nodemon


### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/rauf-dayma/RBAC-Project.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables: Create a `.env` file in the backend directory and add the following variables:
    ```
    MONGO_URI=your-mongodb-uri
    JWT_SECRET=your-secret-key
    PORT=5000
    ```
4. Start the server:
    ```bash
    npm start
    ```
## API Endpoints

### Authentication
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in a user and get a JWT token.

## RBAC system
- `GET /api/user/admin`: admin Route.
- `GET /api/user/moderator`: moderator Route.
- `GET /api/user/user`: user Route.
