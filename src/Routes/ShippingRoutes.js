import express from "express";
import ShippingController from "../Controller/ShippingController";


const ShippingRoutes =express.Router();

ShippingRoutes.post("/",ShippingController.createShipping);
ShippingRoutes.get("/", ShippingController.getAllShipping);
ShippingRoutes.get("/:id", ShippingController.getOneShipping);
ShippingRoutes.put("/:id", ShippingController.updateAll);
ShippingRoutes.delete("/:id", ShippingController.deleteShipping)

export default ShippingRoutes;