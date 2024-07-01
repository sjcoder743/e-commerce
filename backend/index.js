import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Initialize the app
const app = express()

import dotenv from "dotenv";
import connectDb from "./config/db.js";

// Load environment variables from the .env file
dotenv.config({
  path: "./.env"
})

// Middleware
app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL
})); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser())

// import routes here
import router from "./routes/index.js";

// Basic route
app.use("/api", router)

// Start the server
const PORT = process.env.PORT || 3000;

// database connection
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("Connected to database successfull");
  })
}).catch((err) => {
  console.log("Error in connection");
})

