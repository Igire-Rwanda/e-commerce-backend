import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
   
    names: String,
 
    isActive:{
        type:Boolean,
        default:true,
    },
},{timestamps:true}
);


const Category = mongoose.model('Category', CategorySchema);
export default Category;