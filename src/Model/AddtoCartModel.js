import mongoose from "mongoose";



const AddtoCartSchema= new mongoose.Schema({
      quantity: String,
      totalPrice: String,
      product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"product"
      },
      user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
      }

})


export default mongoose.model("addtocart",AddtoCartSchema)