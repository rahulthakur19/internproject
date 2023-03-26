const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const details = new Schema({
  id: String,
  user_id: String,
  client_name: String,
  client_email: String,
  client_phone: Number,
  password: { type: String },
  token: { type: String },
  comments: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("detail", details);