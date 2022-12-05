import express from "express";
import CategoryController from "../Controller/CategoryController";




const CategoryRoute=express.Router();

CategoryRoute.post("/",CategoryController.createCategory);
CategoryRoute.get("/",CategoryController.getAllCategories);
CategoryRoute.get("/:id",CategoryController.getOneCategory);
CategoryRoute.put("/:id",CategoryController.updateAll);
CategoryRoute.delete("/:id",CategoryController. deleteCategory);

export default CategoryRoute; 