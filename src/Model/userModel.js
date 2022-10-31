
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    names: String,
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
        default: "Admin"
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true }
);

const userInfo = mongoose.model('Admin', userSchema);
export default userInfo;