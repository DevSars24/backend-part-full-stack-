import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" }); // ✅ load env vars first

import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();

// ✅ CORS setup
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

// ✅ Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ API route
app.use("/api/v1/reservation", reservationRouter);

// ✅ Health check route
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  });
});

// ✅ Connect to MongoDB
dbConnection();

// ✅ Global error handler
app.use(errorMiddleware);

export default app;
