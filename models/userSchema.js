const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  age: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
