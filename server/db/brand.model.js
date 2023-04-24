const { Schema, model } = require("mongoose");

module.exports = model(
  "Brand",
  new Schema({
    name: String,
    country: String,
    created: {
      type: Date,
      default: Date.now,
    },
  })
);