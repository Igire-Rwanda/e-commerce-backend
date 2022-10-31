import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";

import mongoose from "mongoose";
import  index from "./src/route/index"

const app = express();

app.use(bodyParser.json());
app.use("/",index);


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
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is running on  port ${port}`);
});

export default app;
