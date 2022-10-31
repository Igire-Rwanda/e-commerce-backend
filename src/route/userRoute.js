import  Express  from "express";
import UserContoller from "../Controllers/UserController";


const userRouter =Express.Router();

userRouter.post("/",UserContoller.createUser)
userRouter.get("/",UserContoller.getAllUsers)
userRouter.get("/:id",UserContoller.getOneUser)
userRouter.patch("/:id",UserContoller.updateUser)
userRouter.delete("/:id",UserContoller.deleteUser)


export default userRouter;