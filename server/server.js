require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const EmployeeModel = require("./db/employee.model");

const { MONGO_URL, PORT } = process.env;

if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

const app = express();
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/employees/", async (req, res, next) => {
  try {
    const employees = await EmployeeModel.find().sort({ created: "desc" });
    return res.json(employees);
  } catch (err) {
    return next(err);
  }
});

app.get("/api/employees/:id", async (req, res, next) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    return res.json(employee);
  } catch (err) {
    return next(err);
  }
});

app.post("/api/employees/", async (req, res, next) => {
  const employee = req.body;
  try {
    const saved = await EmployeeModel.create(employee);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

app.patch("/api/employees/:id", async (req, res, next) => {
  try {
    const employee = await EmployeeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json(employee);
  } catch (err) {
    return next(err);
  }
});

app.delete("/api/employees/:id", async (req, res, next) => {
  try {
    const deleted = await EmployeeModel.findByIdAndDelete(req.params.id);
    return res.json(deleted);
  } catch (err) {
    return next(err);
  }
});

const main = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    app.listen(PORT, () => {
      console.log(`App is listening on ${PORT}`);
      console.log("Try /api/employees route right now");
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
main();
