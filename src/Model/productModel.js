
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    
    description:String,
    productName:String,
    productPicture:String,
    
  price:String,
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    // User: {
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"User"
    // },
    

 

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
