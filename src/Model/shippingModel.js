
import mongoose from 'mongoose';

const shippingSchema = new mongoose.Schema({
    names: String,
    Price: String,
    Location: {
        state: String,
        city: String,
        Province: String,
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
    },
    PaymentMode: {
        type: String,
        enum: ["Momo", "Bk", "Equity"]
    },
    phone: String,
    status:{
        type: String,
        enum: ["Approved","Available"]
    },
    role: {
        type: String,
        enum: ["user","client","shipping"],
        default: "shipping"
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true }
);

const shippingInfo = mongoose.model('shipping', shippingSchema);
export default shippingInfo;