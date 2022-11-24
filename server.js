import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import  index from "./src/route/index"
import cors from "cors";
import product from "./src/Routes/ProductRoutes";
import userRoute from "./src/route/UserRoute";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api",index);
app.use("/",product);
// app.use("/",index);


app.use("/users", userRoute);



//DATABASE CONFIGURATION
// const database = process.env.DATABASE;
// mongoose
//   .connect(database, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Database connected successfully!");
//   });
  
//server configuration
mongoose.connect("mongodb://localhost:27017/users").then(()=>{
    app.listen(4000, () => {
        console.log("server is running on port 4000!")
    
    });

});

export default app;