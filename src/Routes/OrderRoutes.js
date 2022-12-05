import express from "express";
import OrderController from "../Controller/OrderController";




const OrderRoutes = express.Router()
OrderRoutes.post("/", OrderController.createOrder);
OrderRoutes.get("/", OrderController.getAllOrder);
OrderRoutes.get("/:id", OrderController.getOneOrder);
OrderRoutes.put("/:id", OrderController.updateAll);
OrderRoutes.delete("/:id", OrderController.deleteOrder)


export default OrderRoutes
