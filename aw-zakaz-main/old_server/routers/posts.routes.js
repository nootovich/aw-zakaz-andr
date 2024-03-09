const Router = require("express");
const Post = require("../models/Post");
const ObjectId = require("mongoose").ObjectId;
const { check, validationResult } = require("express-validator");
const router = new Router();

router.post(
  "/create",
  [
    check("name", "Uncorreect name").isLength({ min: 4 }),
    check("description", "Uncorrect Description").isLength({ min: 12 }),
  ],
  async (req, res) => {
    try {
      const { name, description, imageLink } = req.body;

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Uncorrect request", errors });
      }

      const candidate = await Post.findOne({ name });

      if (candidate) {
        return res
          .status(400)
          .json({ message: `Post with name ${name} already exist` });
      }

      const post = new Post({ name, description, imgLink: imageLink });
      await post.save();
      return res.json({ message: "post was created" });
    } catch (e) {
      return res.json({ message: "Server error" });
    }
  },
);

router.post("/delete", async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.body.id });
    return res.json({ message: "post successfully deleted" });
  } catch (e) {
    return res.json({ message: `Server error: ${e}` });
  }
});

router.get("/list", async (req, res) => {
  try {
    const posts = await Post.find({});
    return res.json({ posts: posts });
  } catch (e) {
    return res.json({ message: "Server error" });
  }
});

module.exports = router;
