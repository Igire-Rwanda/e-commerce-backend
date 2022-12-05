import mongoose from "mongoose";



const OrderProductSchema= new mongoose.Schema({
      name: String,
      product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"product"
      },
})


export default mongoose.model("oderproduct",OrderProductSchema)