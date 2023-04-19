const { Schema, model } = require("mongoose");

module.exports = model(
  "Equipment",
  new Schema({
    name: String,
    type: String,
    amount: Number,
    created: {
      type: Date,
      default: Date.now,
    },
  })
);
