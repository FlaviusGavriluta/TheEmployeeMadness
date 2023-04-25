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
    salary: Number,
    positions: {
      type: Schema.Types.ObjectId,
      ref: "Positions",
    },
    equipment: {
      type: Schema.Types.ObjectId,
      ref: "Equipment",
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
    },
    favoriteColor: String,
    created: {
      type: Date,
      default: Date.now,
    },
  })
);
