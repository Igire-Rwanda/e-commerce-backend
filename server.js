import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import index from "./src/Routes/index";
import product from "./src/Routes/ProductRoutes";
import path  from 'path';
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'assets')))
app.use("/api",index);
app.use("/products",product);


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