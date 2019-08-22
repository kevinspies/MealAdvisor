const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: false },
  weight: { type: Number, required: false },
  age: { type: Number, required: false },
  height: { type: String, required: false },
  sex: { type: String, required: false },
  dailyCalorieGoal: { type: Number, required: false }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
