
import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    transactionName: String,
    PaymentMode: {
        type: String,
        enum: ["Momo", "Bk", "Equity"]
    },
    productId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductId"
    },
    
    phone: String,
    statusTransaction:{
        type: String,
        enum: ["Approved","Available"]
    },
    createdBy:{
        type:mongoose.Schema.ObjectId,
        ref:"transaction",
    },
    role: {
        type: String,
        enum: ["user","client","shipping","transaction"],
        default: "transaction"
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true }
);
transactionSchema.pre(/^find/,function(next){
    this.populate({
        path:"createdBy",
        select:"transactionName paymentMode phone statusTransaction"
    });
    next();
})

const transactionInfo = mongoose.model('transaction', transactionSchema);
export default transactionInfo;