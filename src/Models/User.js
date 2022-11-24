import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

    names:String,
    email:String,
    password:String,
    companyName:String,
    telephoneNumber:String,
    address:String,
    // role:{
    //     enum:["Admin","Retailer"],
    //     default:"Retailer"
    // }
})

export default mongoose.model("User",UserSchema);