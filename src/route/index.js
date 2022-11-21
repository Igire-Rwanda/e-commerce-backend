import {Router} from "express";
import userRouter from "./userRoute";
import OrderRouter from "./OrderRoute";
import ShippingRouter from "./shippingRoute";
import ProductRouter from "./productRoute";
import TransactionRouter from "./transactionRoute";
import CategoryRouter from "./categoryRoute";
import passwordReset from "./passwordReset";
import users from "./userRoute"
const router = Router();
router.use("/api/users",users);
router.use("/api/password-reset",passwordReset);
router.use('/user',userRouter);
router.use('/ordering',OrderRouter);
router.use('/Shipping', ShippingRouter)
router.use('/product', ProductRouter)
router.use('/transaction', TransactionRouter)
router.use('/category',CategoryRouter)


export default router;