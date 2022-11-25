import express from "express";
import uploader from "../utils/uploader";
import productController from "../Controller/ProductController";

const productRouter=express.Router();
productRouter.post("/",uploader.single("picture"),productController.createProduct)
productRouter.get("/",productController.getAllProduct)
productRouter.get("/:id",productController.getOneProduct)
productRouter.patch("/:id",productController.UpdateProduct)
productRouter.delete("/id" ,productController.DeleteProduct)

export default productRouter;