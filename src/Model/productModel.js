
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    names:String,
    description:String,
    productName:String,
    productPicture:String,
    
  
    retailer: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Retailer"
    },
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    

 
    isActive:{
        type:Boolean,
        default:true,
    },
},{timestamps:true}
);
// ProductSchema.pre(/^find/,function(next){
//     this.populate({
//         path:"user",
//         select:"names email address"
//     });
//     next();
// })

export default mongoose.model('ProductItem', ProductSchema);
