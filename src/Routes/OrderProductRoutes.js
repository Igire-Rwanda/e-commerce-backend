
import express from "express";
import OrderProductController from "../Controller/OrderProductController";


const OrderProductRoutes = express.Router();


OrderProductRoutes.post("/", OrderProductController.createOderProduct);
OrderProductRoutes.get("/", OrderProductController.getAllOrderProduct);
OrderProductRoutes.get("/:id", OrderProductController.getOneOrderProduct);
OrderProductRoutes.put("/:id", OrderProductController.updateAll);
OrderProductRoutes.delete("/:id", OrderProductController.deleteOrderProduct)

export default OrderProductRoutes;