


import  {create,getAll,getOneById,updateOneById,deleteOneById} from "./globalController";
import shippingModel from "../Model/shippingModel"


export const createController = create(shippingModel)
export const getAllController = getAll(shippingModel)

export const getOneController = getOneById(shippingModel)


export const updateController = updateOneById(shippingModel)

export const deleteController =deleteOneById(shippingModel)