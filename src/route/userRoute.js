import express from "express";
import User from "../Models/User";
import UserVefication from "../Models/UserVerification";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserController from "../controllers/UserController";
import nodemailer from "nodemailer";
import uuid from "uuidv4";
import * as dotenv from "dotenv"




const router = express.Router();
// router.get("/", (req, res) => {
//     return res.send({ message: "All Users!!!" })
// });


router.post("/login", async (req, res) => {


    try {

        const email = req.body.email;
        const password = req.body.password;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const findUser = await User.findOne({ email: email });

        if (findUser) {
            const isPasswordValid = bcrypt.compareSync(password,findUser.password);
            if (isPasswordValid) {
                const token = jwt.sign({ email: findUser.email,id:findUser._id }, "secret-key", { expiresIn: "1h" });
                return res.send({ message: "Logged In!!!", data: token });
            } else {
                return res.status(404).send({ message: "Incorrect Email or Password!!!" });
            }
        } else {
            res.status(404).send({ message: "Incorrect Email or Password!!!" });
        }

    } catch (error) {
        return res.send({ message: "Error", data: error.message })
    }
});

router.post("/forgot-password",async(req,res)=>{
    //first we'll receive email from the user
    const {email} = req.body;
    //then we are going to check if the user with this email exists or not
    
    try {
        const oldUser = await User.findOne({email});
        if(!oldUser){
            return res.status(404).send({message: "User Not Exists!!!"});
        }else {

        const secret = jwt+oldUser.password;
        const token = jwt.sign({email:oldUser.email, id:oldUser._id} , secret, { expiresIn: "10min"});
        
        //this link will be sent to the user's mail 
        const link= `http://localhost:4000/reset-password/${oldUser._id}/${token}`;
        console.log(link); 
        };

        
    } catch (error) {
        return res.send({ message: "Error", data: error.message })
        
    }
});
//send OTP verification email 




router.post("/",UserController.createUser);
router.get("/",UserController.getAllUsers);
router.patch("/:id",UserController.UpdateUser)

export default router;
