const { Schema, model } = require("mongoose");

module.exports = model(
  "View",
  new Schema({
    page: String,
    created: {
      type: Date,
      default: Date.now,
    },
  })
);
