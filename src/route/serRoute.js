const {User,validate}= require("../Model/serMdle")
const express = require('express');
import { checkUser,loginUser } from "../Middlewares/checkUserExist";
import { verifyUserToken } from "../Middlewares/verifyToken";
const router = express.Router();
router.post("/login", loginUser);
router.use(verifyUserToken);
router.post("/",async (req,res)=>{
    try {
        const {error} = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        const user = await new User(req.body).save();

        res.send(user)
    } catch (error) {
        res.send("An error occured"+error.message)
        console.log(error)
    }
})
module.exports = router