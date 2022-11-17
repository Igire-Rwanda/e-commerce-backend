import categoryModel from "../Model/categoryModel"
import  {create,getAll,getOneById,updateOneById,deleteOneById} from "./globalController";

export const createController = create(categoryModel)
export const getAllController = getAll(categoryModel)

export const getOneController = getOneById(categoryModel)


export const updateController = updateOneById(categoryModel)

export const deleteController =deleteOneById(categoryModel)