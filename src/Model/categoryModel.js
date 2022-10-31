import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    productId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductId"
    },
    names: String,
    price:String,
    quantity: String,
    Amount: String,
    isActive:{
        type:Boolean,
        default:true,
    },
},{timestamps:true}
);


const Category = mongoose.model('Category', CategorySchema);
export default Category;