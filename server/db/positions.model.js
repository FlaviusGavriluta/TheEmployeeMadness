const { Schema, model } = require("mongoose");

module.exports = model(
  "Positions",
  new Schema({
    name: String,
    salary: Number,
    created: {
      type: Date,
      default: Date.now,
    },
  })
);