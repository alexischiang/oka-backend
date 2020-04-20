module.exports = (app) => {
  const mongoose = require("mongoose");
  mongoose.connect("mongodb://localhost:27017/oka", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
