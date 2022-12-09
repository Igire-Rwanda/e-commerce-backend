import {Router} from "express";
import users from "./userRoute"
import categoryroute from "./CategoryRoute";
import DescriptionRoute from "./DescriptionRoute";



const router = Router();
router.use("/users",users);
router.use("/categories",categoryroute);
router.use("/description",DescriptionRoute)


export default router;