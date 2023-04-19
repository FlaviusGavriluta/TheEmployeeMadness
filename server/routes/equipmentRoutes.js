const express = require("express");
const EquipmentModel = require("../db/equipment.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const employees = await EquipmentModel.find().sort({ created: "desc" });
    return res.json(employees);
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const employee = await EquipmentModel.findById(req.params.id);
    return res.json(employee);
  } catch (err) {
    return next(err);
  }
});

router.post("/", async (req, res, next) => {
  const employee = req.body;
  try {
    const saved = await EquipmentModel.create(employee);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;