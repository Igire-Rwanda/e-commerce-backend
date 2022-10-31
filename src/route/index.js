import {Router} from "express";
import userRouter from "./userRoute";
import OrderRouter from "./OrderRoute";
import ShippingRouter from "./shippingRoute";
import ProductRouter from "./productRoute";
import TransactionRouter from "./transactionRoute";
import CategoryRouter from "./categoryRoute";

const router = Router();

router.use('/user',userRouter);
router.use('/ordering',OrderRouter);
router.use('/Shipping', ShippingRouter)
router.use('/product', ProductRouter)
router.use('/transaction', TransactionRouter)
router.use('/category',CategoryRouter)


export default router;