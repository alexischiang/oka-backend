const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String },
  no: { type: String },
  endDate: { type: String },
  purchaseOnDate: { type: String },
  duration: { type: String },
  paid: { type: String },
  note: { type: String },
});

module.exports = mongoose.model("User", schema);
