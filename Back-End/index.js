//Package imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { app ,server } from "./socket/socketIo.js";

//route imports
import { authRoutes, messageRoutes, userRoutes } from "./routes/routers.js";
//Db import
import { connectDB } from "./db/dbConnection.js";

dotenv.config();

const PORT = process.env.PORT;

// Middlewares
app.use(express.json()); // for parsing application/json
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);


// app.get("/", (req, res) => {
//     res.send("hello")
// })

// Listen Server
server.listen(PORT, (err) => {
  if (err) throw err;
  //DB connection
  connectDB(process.env.MONGO_DB_URI);
  console.log(`Server is running on PORT :${PORT} `);
});
