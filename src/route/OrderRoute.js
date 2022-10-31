import  Express  from "express";
import OrderController from "../Controllers/OrderController";


const OrderRouter =Express.Router();

OrderRouter.post("/",OrderController.createOrder)
OrderRouter.get("/",OrderController.getAllOrder)
OrderRouter.get("/:id",OrderController.getOneOrder)
OrderRouter.patch("/:id",OrderController.updateOrder)
OrderRouter.delete("/:id",OrderController.deleteOrder)


export default OrderRouter;
