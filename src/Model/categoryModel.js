import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
   
    names: String,
 
   
},{timestamps:true}
);


const Category = mongoose.model('Category', CategorySchema);
export default Category;