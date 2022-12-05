import mongoose from "mongoose";


const ShippingSchema= new mongoose.Schema({
    firstName:String,
    lastName:String,
    shippingAddress: {
        province: String,
        country: String
      },

})

export default mongoose.model("shipping", ShippingSchema)