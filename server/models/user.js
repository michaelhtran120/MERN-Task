const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:{
    type: String,
    required: true,
    unique: [true, "Please provide email"]
  },
  password: {
    type: String,
    required: [true, "Please provide password"]
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true
  }
},{
  timestamps: true
})

module.exports = mongoose.model("Users", userSchema);