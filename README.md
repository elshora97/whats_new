
# Real-Time Chat Application (MERN Stack)

## Overview
A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and powered by **Socket.io** for real-time bidirectional communication. This app allows users to send and receive messages instantly.

## Features
- Real-time messaging using **Socket.io**
- User authentication with **JWT (JSON Web Token)**
- User status (Online/Offline)

## Tech Stack
- **Frontend**: React.js, Socket.io-client, Zustand
- **Backend**: Node.js, Express.js, Socket.io (for real-time communication)
- **Database**: MongoDB (for storing user information and messages)
- **Authentication**: JWT (JSON Web Token)
- **Other**: Cors, dotenv

## Installation

### Prerequisites
- Node.js
- MongoDB (or a MongoDB cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/elshora97/whats_new.git
   cd whats_new
   ```

2. **Install Backend Dependencies**

   Navigate to the `backend` directory and install the required dependencies:

   ```bash
   cd backend
   npm install
   ```

3. **Set up the `.env` file**

   Create a `.env` file in the `backend` directory and add the following environment variables:

   ```env
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret_key>
   PORT=3000
   NODE_ENV=development
   CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
   ```

4. **Install Frontend Dependencies**

   Navigate to the `frontend` directory and install the required dependencies:

   ```bash
   cd frontend
   npm install
   ```

5. **Start the Application**

   - **Frontend**: Navigate to the `frontend` directory and start the React development server:

     ```bash
     cd frontend
     npm start
     ```

   - **Backend**: In another terminal window, navigate to the `backend` directory and start the Node.js server:

     ```bash
     cd backend
     npm start
     ```

After completing these steps, you should be able to access the application in your browser.
