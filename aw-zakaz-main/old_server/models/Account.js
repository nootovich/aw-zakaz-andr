const { Schema, model } = require("mongoose");

const Account = new Schema({
  login: {type: String, required: true},
  password: {type: String, required: true}
})

module.exports = model("account", Account)