


import  {create,getAll,getOneById,updateOneById,deleteOneById} from "./globalController";
import orderModel from "../Model/orderModel"


export const createController = create(orderModel)
export const getAllController = getAll(orderModel)

export const getOneController = getOneById(orderModel)


export const updateController = updateOneById(orderModel)

export const deleteController =deleteOneById(orderModel)