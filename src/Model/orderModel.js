
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    Client: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Client"
    },
    Product: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    Category: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    names:String,
    ShippingAddress:{
        state:String,
        city:String,
    },
    TotalAmount:String,
    role:{
        type:String,
        enum:["order","Admin"],
        default:"order"
    },
    isActive:{
        type:Boolean,
        default:true,
    },
},{timestamps:true}
);

const orderInfo = mongoose.model('order', orderSchema);
export default orderInfo;