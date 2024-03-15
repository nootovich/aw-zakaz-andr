const { Schema, model } = require("mongoose");

const Post = new Schema({
  imgLink: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = model("post", Post);
