const express = require("express");
const PositionsModel = require("../db/brand.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const employees = await PositionsModel.find();
    return res.json(employees);
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const employee = await PositionsModel.findById(req.params.id);
    return res.json(employee);
  } catch (err) {
    return next(err);
  }
});

router.post("/", async (req, res, next) => {
  const employee = req.body;
  try {
    const saved = await PositionsModel.create(employee);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
