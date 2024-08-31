import express from "express";
import morgan from "morgan";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import cors from "cors";
//routers
import mongoose, { Mongoose } from "mongoose";
import connectDB from "./Db/index.js";
// Change CommonJS require to ES module import
import userRouter from "./Routes/userRoute.js";
// import itemRouter from "./Routes/itemRoute.js";
import cartRouter from "./Routes/cartRoute.js";
import orderRouter from "./Routes/orderRoute.js";

//
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
app.use(morgan("dev"));
app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Simple Server !!");
});

app.use(userRouter);
// app.use(itemRouter);
app.use(cartRouter);
app.use(orderRouter);
// Error Page
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not Found" });
});
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "Something Went wrong" });
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
