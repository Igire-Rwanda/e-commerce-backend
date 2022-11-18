import mongoose from 'mongoose';

const Joi = require('joi');
const userSchema = new mongoose.Schema({
    names: String,
   
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: String,
   
    isActive: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true }
);


const User = mongoose.model('user', userSchema);
const validate = (user) =>{
    const Schema = Joi.object({
        names: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    })
    return Schema.validate(user)
}
module.exports ={User,validate}
export default User;