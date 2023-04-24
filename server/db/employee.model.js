const { Schema, model } = require("mongoose");

module.exports = model(
  "Employee",
  new Schema({
    name: String,
    present: {
      type: Boolean,
      default: false,
    },
    level: String,
    position: String,
    equipment: {
      type: Schema.Types.ObjectId,
      ref: "Equipment",
    },
    created: {
      type: Date,
      default: Date.now,
    },
  })
);
