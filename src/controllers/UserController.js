import User from "../Models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


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

}
export default UserController;