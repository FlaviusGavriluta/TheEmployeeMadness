const express = require("express");
const ViewModel = require("../db/view.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const views = await ViewModel.find();
    return res.json(views);
  } catch (err) {
    return next(err);
  }
});

router.get("/views-count", async (req, res, next) => {
  try {
    const count = await ViewModel.countDocuments({});
    return res.json({ count });
  } catch (err) {
    return next(err);
  }
});

router.post("/", async (req, res, next) => {
  const page = req.body;
  try {
    const saved = await ViewModel.create(page);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

router.get("/:page", async (req, res, next) => {
  try {
    const { page } = req.params;
    const view = await ViewModel.findOne({ page });
    if (!view) {
      return res.status(404).send("Page not found");
    }
    res.json({ page, count: view.count });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
