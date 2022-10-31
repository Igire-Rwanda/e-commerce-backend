import  Express  from "express";
import productController from "../Controllers/productController";


const ProductRouter =Express.Router();

ProductRouter.post("/",productController.createProduct)
ProductRouter.get("/",productController.getAllProduct)
ProductRouter.get("/:id",productController.getOneProduct)
ProductRouter.patch("/:id",productController.updateProduct)
ProductRouter.delete("/:id",productController.deleteProduct)


export default ProductRouter;
