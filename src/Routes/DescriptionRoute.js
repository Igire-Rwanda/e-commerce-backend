import express from "express";
import DescriptionController from "../Controller/DescriptionController";




const DescriptionRoute=express.Router();

DescriptionRoute.post("/",DescriptionController.createDescription);

export default DescriptionRoute;