import mongoose from "mongoose";

const PasswordResetSchema = mongoose.Schema({

    email:String,
    resetString:String,


});

const  PasswordReset = mongoose.model('PasswordReset', PasswordResetSchema);

module.exports=PasswordReset;