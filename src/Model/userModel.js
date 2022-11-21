import mongoose from 'mongoose';
const Joi = require('joi');
const userSchema = new mongoose.Schema({
    companyName: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: String,
    address: {
        state: String,
        city: String,
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
    },
    age: Number,
    phone: String,
    role: {
        type: String,
        enum: ["user", "Admin"],
        default: "user"
    },
   
    isActive: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true }
);

export default mongoose.model("UserModel",userSchema);
// const User = mongoose.model('user', userSchema);
// const Validate = (user) =>{
//     const Schema = Joi.object({
//         names: Joi.string().required(),
//         email: Joi.string().required(),
//         password: Joi.string().required(),
//     })
//     return Schema.validate(user)
// }
// module.exports.User ={User,Validate}
// export default User;