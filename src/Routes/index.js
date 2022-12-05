import { Router } from "express";
import users from "./userRoute"
import categoryroute from "./CategoryRoute";
import OrderRoutes from "./OrderRoutes";
import AddtoCartRoutes from "./AddtoCartRoutes";
import OrderProductRoutes from "./OrderProductRoutes";
import ShippingRoutes from "./ShippingRoutes";
import PaymentRoutes from "./PaymentRoutes";


const router = Router();


router.use("/users", users);
router.use("/categories", categoryroute);
router.use("/order", OrderRoutes);
router.use("/addtocart", AddtoCartRoutes);
router.use("/oderproduct", OrderProductRoutes);
router.use("/shipping",ShippingRoutes);
router.use("/payment",PaymentRoutes);

export default router;