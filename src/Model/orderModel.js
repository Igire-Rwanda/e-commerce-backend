
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
   
  quantity:String,
    ShippingAddress:{
        state:String,
        city:String,
    },
    TotalAmount:String,
    status:{
        type:String,
        enum:["pending","delivered"],
        default:"pending"
    },
  
},{timestamps:true}
);

const orderInfo = mongoose.model('order', orderSchema);
export default orderInfo;