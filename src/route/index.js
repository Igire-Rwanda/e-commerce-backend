import {Router} from "express";
import users from "./userRoute"
const router = Router();
router.use("/api/users",users);

export default router;