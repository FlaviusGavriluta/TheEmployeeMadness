const { Schema, model } = require("mongoose");

module.exports = model(
  "Views",
  new Schema({
    ipAddress: {type: String},
    created: {
      type: Date,
      default: Date.now,
    },
  })
);