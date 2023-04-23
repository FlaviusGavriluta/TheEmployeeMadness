const express = require("express");
const ViewsModel = require("../db/view.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const views = await ViewsModel.find();
    return res.json(views);
  } catch (err) {
    return next(err);
  }
});

router.post("/", async (req, res, next) => {
  const view = req.body;
  try {
    const saved = await ViewsModel.create(view);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
