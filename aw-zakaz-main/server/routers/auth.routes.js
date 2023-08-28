const Router = require("express");
const User = require("../models/Account");
const bcryprt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const { check, validationResult } = require("express-validator");
const router = new Router();

router.post(
  "/registration",
  [
    check("login", "Uncorreect login").isLength({ min: 4 }),
    check(
      "password",
      "Password must be longer than 3 and shorter than 12"
    ).isLength({ min: 3, max: 12 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Uncorrect request", errors });
      }

      const { login, password } = req.body;

      const candidate = await User.findOne({ login });

      if (candidate) {
        return res
          .status(400)
          .json({ message: `Admin with login ${login} already exist` });
      }

      const hashPassword = await bcryprt.hash(password, 8);
      const user = new User({ login, password: hashPassword });
      await user.save();
      return res.json({ message: "Admin account was created" });
    } catch {
      return res.send({ message: "Server error" });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const { login, password } = req.body;

    const user = await User.findOne({ login });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPassValid = bcryprt.compareSync(password, user.password);
    
    if (!isPassValid) {
      return res.status(400).json({ message: "Invalid pasword" });
    }

    const token = jwt.sign({id: user.id}, "aw", {expiresIn: "24h"})
    
    return res.json({
      token,
      admin: {
        id: user.id,
        login: user.login
      }
    })
  } catch {
    return res.send({ message: "Server error" });
  }
});

module.exports = router;
