import User from "../Models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import userRoute from "./src/route/UserRoute";
import nodemailer from "nodemailer";
import "dotenv/config"

class UserController{
    static async getAllUsers(req,res){
        const user= await User.find();
        if(!user){
            return res.status(404).json({error: "user are not exist"})
        }
        return res.status(200).json({message: "get all Users successfully", User:user})
    }

    static async createUser(req,res){
        try {

            const hashedPassword =  bcrypt.hashSync(req.body.password,10);
            const user = new User({    
                names:req.body.names,
                email:req.body.email,
                password:hashedPassword,
                companyName:req.body.companyName,
                telephoneNumber:req.body.telephoneNumber,
                address:req.body.address
                
             })
             await user.save();
             const otp = `${Math.floor(1000 + Math.random()*9000)}`;

             let transporter = nodemailer.createTransport({
              service:"gmail",
              auth:{
                  user:process.env.AUTH_EMAIL,
                  pass:process.env.AUTH_PASS,
              }
          })
             
             //mail options
             const mailOptions = {
              from:process.env.AUTH_EMAIL,
              to:user.email,
              subject:"Verify your Email",
              html:`<p>Enter <b>${otp}</b> in the app to verify your email address and complete your signup process!</p><p>This code <b>expires in 30 minutes</b>.</p> `,
             };
      
             //hash the otp
          //    const saltRounds = 10;
          //    const hashedOTP = await bcrypt.hash(otp,saltRounds);
          //    const newOTPVerification = await new UserOTPVerification({
      
          //     userId:_id,
          //     otp:hashedOTP,
          //     createdAt:Date.now(),
          //     expiresAt:Date.now()+3600000,
          //    });
          //    //save otp record
          //    await newOTPVerification.save();
             await transporter.sendMail(mailOptions);
        
             const token = jwt.sign({email:User.email},"secret-key",{expiresIn:"1h"});
             return res.send({message:"Account Created!!!",data:token})   
             } catch (error) {
                return res.send({message:"Error",data:error.message})     
             }

    }
   static async UpdateUser(req,res){
    const UserUpdate = await User.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    });
    if(!UserUpdate){
        return res.status(404).json({error: "nothing is going to update"})
    }
    return res.status(200).json({message: "updating User Successfull", User:UserUpdate})
   } 



   
static async sendOTPVerificationEmail  ({_id,email},res){
    try {
       const otp = `${Math.floor(1000 + Math.random()*9000)}`;

       let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.AUTH_EMAIL,
            pass:process.env.AUTH_PASS,
        }
    })
       
       //mail options
       const mailOptions = {
        from:process.env.AUTH_EMAIL,
        to:email,
        subject:"Verify your Email",
        html:`<p>Enter <b>${otp}</b> in the app to verify your email address and complete your signup process!</p><p>This code <b>expires in 30 minutes</b>.</p> `,
       };

       //hash the otp
    //    const saltRounds = 10;
    //    const hashedOTP = await bcrypt.hash(otp,saltRounds);
    //    const newOTPVerification = await new UserOTPVerification({

    //     userId:_id,
    //     otp:hashedOTP,
    //     createdAt:Date.now(),
    //     expiresAt:Date.now()+3600000,
    //    });
    //    //save otp record
    //    await newOTPVerification.save();
       await transporter.sendMail(mailOptions);
    } catch (error) {
        res.json({
            status:"FAILED",
            message:error.message,
        });
        
    }
}

}
export default UserController;