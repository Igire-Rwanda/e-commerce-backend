import  Express  from "express";
import categoryController from "../Controllers/categoryController";


const CategoryRouter =Express.Router();

CategoryRouter.post("/",categoryController.createCategory)
CategoryRouter.get("/",categoryController.getAllCategory)
CategoryRouter.get("/:id",categoryController.getOneCategory)
CategoryRouter.patch("/:id",categoryController.updateCategory)
CategoryRouter.delete("/:id",categoryController.deleteCategory)


export default CategoryRouter;