require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const employeeRoutes = require("./routes/employeeRoutes");
const equipmentRoutes = require("./routes/equipmentRoutes");
const brandRoutes = require("./routes/brandRoutes");
const positionsRoutes = require("./routes/positionsRoutes")
const viewsRoutes = require("./routes/viewsRoutes");

const { MONGO_URL, PORT } = process.env;

if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

//Middleware
const app = express();
app.use(express.json());
app.use(cors());

//Routing
app.use("/api/employees", employeeRoutes);
app.use("/api/equipments", equipmentRoutes);
app.use("/api/brands/", brandRoutes);
app.use("/api/positions/", positionsRoutes);
app.use("/api/views/", viewsRoutes);

//Connect to MongoDB and Start the Server
const main = async () => {
  try {
    await connect(MONGO_URL).then(() =>
      console.log("Successfully connected to MongoDB!")
    );
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
      console.log("Try /api/employees or /api/equipments route right now");
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
main();
