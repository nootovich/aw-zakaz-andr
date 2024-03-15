const mongoose = require("mongoose");
const express = require("express");
const authRouter = require("./routers/auth.routes");
const postRouter = require("./routers/posts.routes")
const corsMiddleware = require("./middleware/cors.middleware");
const app = express();
const PORT = 5000;

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter)

const start = async () => {
  try {
//    await mongoose.connect("mongodb://127.0.0.1:27017");

    app.listen(PORT, () => {
      console.log("Server started on port", PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
