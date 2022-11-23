import {Router} from "express";
import users from "./userRoute"
import categoryroute from "./CategoryRoute";
const router = Router();
router.use("/users",users);
router.use("/categories",categoryroute);

export default router;