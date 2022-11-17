import  {create,getAll,getOneById,updateOneById,deleteOneById} from "./globalController";
import productModel from "../Model/productModel"


export const createController = create(productModel)
export const getAllController = getAll(productModel)

export const getOneController = getOneById(productModel)


export const updateController = updateOneById(productModel)

export const deleteController =deleteOneById(productModel)