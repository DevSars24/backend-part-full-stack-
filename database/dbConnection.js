import mongoose from "mongoose";

export const dbConnection = () => {
  const uri = process.env.MONGO_URI;

  // ✅ Debugging line added
  if (!uri) {
    console.error("❌ MONGO_URI is undefined. Check your .env file or dotenv path.");
    return;
  }

  mongoose
    .connect(uri, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("✅ Connected to database!");
    })
    .catch((err) => {
      console.log(`❌ Some error occurred while connecting to database: ${err}`);
    });
};
