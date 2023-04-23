const express = require("express");
const EmployeeModel = require("../db/employee.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const employees = await EmployeeModel.find().sort({ created: "desc" });
    return res.json(employees);
  } catch (err) {
    return next(err);
  }
});

router.get("/employees-count", async (req, res, next) => {
  try {
    const count = await EmployeeModel.countDocuments({});
    return res.json({ count });
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    return res.json(employee);
  } catch (err) {
    return next(err);
  }
});

router.get("/name/:search", async (req, res, next) => {
  try {
    const searchValue = req.params.search;
    const employees = await EmployeeModel.find({
      $or: [
        { name: { $regex: searchValue, $options: "i" } },
        { level: { $regex: searchValue, $options: "i" } },
        { position: { $regex: searchValue, $options: "i" } },
      ],
    });
    return res.json(employees);
  } catch (err) {
    return next(err);
  }
});

router.post("/", async (req, res, next) => {
  const employee = req.body;
  try {
    const saved = await EmployeeModel.create(employee);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
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

router.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await EmployeeModel.findByIdAndDelete(req.params.id);
    return res.json(deleted);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
