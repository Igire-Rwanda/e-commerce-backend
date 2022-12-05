import express from "express";
import PaymentController from "../Controller/PaymentController";




const PaymentRoutes =express.Router();

PaymentRoutes .post("/", PaymentController.createPayment);
PaymentRoutes .get("/", PaymentController.getAllPayment);
PaymentRoutes .get("/:id", PaymentController.getOnePayment);
PaymentRoutes .put("/:id",PaymentController.updateAll);
PaymentRoutes .delete("/:id", PaymentController.deletePayment)


export default PaymentRoutes;