
import mongoose from "mongoose";


const PaymentSchema = new mongoose.Schema({
    NameofCard: String,
    cardNmber: String,
    expiredDate: String,
    password: String

})

export default mongoose.model("payment", PaymentSchema);