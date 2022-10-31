import  Express  from "express";
import shippingController from "../Controllers/shippingController";


const ShippingRouter =Express.Router();

ShippingRouter.post("/",shippingController.createShipping)
ShippingRouter.get("/",shippingController.getAllShipping)
ShippingRouter.get("/:id",shippingController.getOneShipping)
ShippingRouter.patch("/:id",shippingController.updateShipping)
ShippingRouter.delete("/:id",shippingController.deleteShipping)


export default ShippingRouter;
