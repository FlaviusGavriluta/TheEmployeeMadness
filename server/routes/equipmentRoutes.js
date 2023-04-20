const express = require("express");
const EquipmentModel = require("../db/equipment.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const equipments = await EquipmentModel.find().sort({ created: "desc" });
    return res.json(equipments);
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const equipment = await EquipmentModel.findById(req.params.id);
    return res.json(equipment);
  } catch (err) {
    return next(err);
  }
});

router.post("/", async (req, res, next) => {
  const equipment = req.body;
  try {
    const saved = await EquipmentModel.create(equipment);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const equipment = await EquipmentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json(equipment);
  } catch (err) {
    return next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await EquipmentModel.findByIdAndDelete(req.params.id);
    return res.json(deleted);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;