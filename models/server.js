const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  account: { type: String },
  password: { type: String },
  subs: { type: String },
  buyer: { type: String },
  users: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
  no: { type: String },
});

module.exports = mongoose.model("Server", schema);
