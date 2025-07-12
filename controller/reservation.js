// controller/reservation.js
const send_reservation = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, date, time } = req.body;

    // Basic validation (you can expand this)
    if (!firstName || !lastName || !email || !phone || !date || !time) {
      return res.status(400).json({ success: false, message: "Please fill all fields." });
    }

    // Optional: save to DB (if connected to MongoDB)

    return res.status(200).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

export default send_reservation;
