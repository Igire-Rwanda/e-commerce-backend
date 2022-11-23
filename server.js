import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";

import mongoose from "mongoose";
import index from "./src/Routes/index"
import cors from "cors"

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api",index);


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