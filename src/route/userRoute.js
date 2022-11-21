

import { Router }  from "express";
const {User,validate}= require("../Model/userModel")
import * as UserController from "../controllers/userController";
import { checkUser,loginUser } from "../Middlewares/checkUserExist";

// import { verifyUserToken } from "../Middlewares/verifyToken";
const route = Router();
route.post("/login", loginUser);

route
  .route("/")
  .post(checkUser, UserController.createController)
  // route.use(verifyUserToken);
  route.post("/",async (req,res)=>{
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
  .get(UserController.getAllController);


route
  .route("/:id")
  .patch(UserController.updateController)
  .get(UserController.getOneController)
  .delete(UserController.deleteController);

export default route;