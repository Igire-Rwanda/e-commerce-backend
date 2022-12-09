import mongoose from "mongoose";

const userVerificationSchema = mongoose.Schema({

   userId:String, 
   uniqueString:String,
   createdAt:Date,
   expiresAt:Date,
    
});

export default mongoose.model("UserVerification",userVerificationSchema);