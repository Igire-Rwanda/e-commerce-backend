const {User} = require('../Model/serMdle');
const Token = require('../Model/tkenModel');
const sendMail = require('../utils/sendEmail');
const Joi = require("joi");
const crypto = require('crypto');
const express = require('express') ;
const { route } = require('./serRoute');
const schema  = require('../Model/serMdle');
const router = express.Router();

router.post("/",async (req, res)=> {
try {
   const Schema = Joi.object({email: Joi.string().email().required()});
   const {error} = schema.validate(req.body);
   if (error) return res.status(400).send(error.details[0].message);
   const user = await User.findOne({email: req.body.email});
   if(!user) return res.status(400).send("user with given data not exist");
   
   let token = await Token.findOne({userId:user._id});
   if(!token){
    token = await new Token({
        userId:user._id,
        token:crypto.randomBytes(32).toString('hex'),
    }).save()
   }

   const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
   await sendMail(user.email,"password reset",link);

   res.send("password reset link sent to your email account.")


} catch (error) {
    res.send("An Error Occured "+ error.message);
    console.log(error)
}
})

router.post("/:userId/:token",async (req, res) =>{
    try {
        const schema = Joi.object({password:Joi.string().required()});
        const {error} = schema.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        const user = await User.findById(req.params.userId);
        if(!user) return res.status(400).send('invalid link or expired.');

        const token = await Token.findOne({
            userId:user._id,
            token:req.params.token
        });
        if(!token) return res.status(400).send("invalid link or expired.");
        user.password = req.body.password
        await user.save();
        await token.delete();

        res.send("password reset successfully")
    } catch (error) {
        res.send('An Error Occured'+ error.message)
        console.log(error)
    }
})

module.exports = router;