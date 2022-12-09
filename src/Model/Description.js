import mongoose from "mongoose";



const DescriptionSchema= new mongoose.Schema({
      picture: String,
      description:String,
      
})


export default mongoose.model("descriptions",DescriptionSchema)