import express from "express";
import CategoryController from "../Controller/CategoryController";




const CategoryRoute=express.Router();

CategoryRoute.post("/",CategoryController.createCategory);

CategoryRoute.get("/",CategoryController.getAllCategories);

export default CategoryRoute;