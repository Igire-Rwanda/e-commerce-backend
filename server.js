import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";

import mongoose from "mongoose";
import userRouter from "./src/route/userRoute";

const app = express();

app.use(bodyParser.json());
app.use("/",userRouter);

//DATABASE CONFIGURATION
const database = process.env.DATABASE;
mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully!");
  });
  
//server configuration
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on  port ${port}`);
});

export default app;
