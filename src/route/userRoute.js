import  Express  from "express";
import UserContoller from "../Controllers/userController";


const userRouter =Express.Router();

userRouter.post("/signup",UserContoller.signupUser)


export default userRouter;