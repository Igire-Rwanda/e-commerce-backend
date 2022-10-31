
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    names:String,
    description:String,
    productName:String,
    client: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Client"
    },
    retailer: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Retailer"
    },
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    
    role:{
        type:String,
        enum:["Product","Admin","Category"],
        default:"Product"
    },
    isActive:{
        type:Boolean,
        default:true,
    },
},{timestamps:true}
);

export default mongoose.model('ProductItem', ProductSchema);
