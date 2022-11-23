import express from "express";
import CategoryController from "../Controller/CategoryController";




const CategoryRoute=express.Router();

CategoryRoute.post("/",CategoryController.createCategory);

export default CategoryRoute;