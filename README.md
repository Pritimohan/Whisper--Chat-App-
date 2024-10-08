# Real-Time Chat Application

## Overview

The Real-Time Chat Application is a modern web-based chat application that facilitates real-time communication between users. It features user authentication, and a modern design. Built with a tech stack that includes React, Node.js, and Socket.io, this application provides a seamless and interactive messaging experience.

## Features

- **Real-Time Messaging**: Real-time communication powered by Socket.io.
- **User Authentication**: Secure sign-up and login using JWT (JSON Web Tokens).
- **Modern Design**: User-friendly interface built with Tailwind CSS.
- **User Search**: Quickly find and connect with other users through an efficient search feature.
- **Online Status**: Easily view the online status of users to know when they're available for chat.



## Technologies Used

- **Frontend**:

  - **React.js**: For building the user interface.
  - **Tailwind CSS**: For styling the application with a modern, responsive design.
  - **React Router**: For handling client-side routing.

- **Backend**:

  - **Node.js**: Server-side runtime environment.
  - **Express.js**: Web framework for building APIs.
  - **Socket.io**: For enabling real-time, bi-directional communication between clients and the server.

- **Database**:

  - **MongoDB Atlas**: NoSQL database for storing user and chat data.

- **Authentication**:

  - **JWT (JSON Web Tokens)**: For secure user authentication and session management.

- **Password Security**:
  - **bcrypt**: For hashing and salting user passwords.

## Installation

### Prerequisites

- Node.js
- npm or yarn

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Pritimohan/Whisper--Chat-App-.git
   cd Whisper--Chat-App-

   ```

2. **Install Backend Dependencies**

   ```bash
   npm install
   ```

3. **Install Frontend Dependencies**

   ```bash
   cd frontend
   npm install

   ```

4. **Configure Environment Variables**
   Create a `.env` file in the root directory of the project. Add the following environment variables:

   ```env
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   ```

5. **Start the Application**

   ```bash
   # Start the backend server
   cd backend
   npm start
   # Start the frontend application
   cd frontend
   npm run dev
   ```

6. **Access the Application**
   ```bash
    http://localhost:5173
   ```

## Video Demo

- [Real-Time Chat Application Demo - 1](https://www.linkedin.com/posts/pritimohan-shit_this-is-an-overview-video-of-my-project-activity-7223622890716377088-8Bd3?utm_source=share&utm_medium=member_desktop)
- [Real-Time Chat Application Demo - 2](https://www.linkedin.com/posts/pritimohan-shit_webdevelopment-fullstackdeveloper-reactjs-activity-7226106017992884225-2RgR?utm_source=share&utm_medium=member_desktop)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Socket.io Documentation](https://socket.io/docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [JWT Documentation](https://jwt.io/introduction/)
- [bcrypt Documentation](https://www.npmjs.com/package/bcrypt)
- [Express.js Documentation](https://expressjs.com/en/5x/api.html)
- [React Router Documentation](https://reactrouter.com/web/guides/quick-start)
- [React hot toast](https://www.npmjs.com/package/react-hot-toast)

## Author

- [Pritimohan Shit]
