import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "/Users/shailantani/trialevents/backend/routes/user-routes.js";
import adminRouter from "/Users/shailantani/trialevents/backend/routes/admin-routes.js";
import movieRouter from "/Users/shailantani/trialevents/backend/routes/event-routes.js";
import bookingsRouter from "/Users/shailantani/trialevents/backend/routes/booking-routes.js";
import cors from "cors";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

mongoose
  .connect(
    //`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.pq0kw.mongodb.net/?retryWrites=true&w=majority`
    'mongodb+srv://shailantani:abcdefgh@cluster0.x6l6kku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connected To Database And Server is running")
    )
  )
  .catch((e) => console.log(e));


  //