import express from "express";
import productController from "../Controller/ProductController";

const productRouter=express.Router();
productRouter.post("/AddProduct",productController.AddProduct)

export default productRouter;