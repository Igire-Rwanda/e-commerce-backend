import {Router} from "express";
import users from "./UserRoute"
const router = Router();
router.use("/api/users",users);

export default router;