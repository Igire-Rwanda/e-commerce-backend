import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    price:String,
    quantity:Number,
    title:String,
    description:String,
    category:String,

},
{
    timestamps: true,
}
);
const Product=mongoose.model("product",productSchema);
export default Product;
