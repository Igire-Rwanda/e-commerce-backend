import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  totalAmount: String,
  quantity: String,
  shippingAddress: {
    province: String,
    country: String
  },
  product: {
    type:mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  retailer: {
    type:mongoose.Schema.Types.ObjectId,
    ref: "retailer",
  },
})


export default mongoose.model("order", OrderSchema)