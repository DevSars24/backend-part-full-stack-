// routes/reservationRoute.js
import express from "express";
import send_reservation from "../controller/reservation.js";

const router = express.Router();

// POST /api/v1/reservation/send
router.post("/send", send_reservation);

export default router;
