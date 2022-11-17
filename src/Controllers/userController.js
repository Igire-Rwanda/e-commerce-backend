
// import handleCRUD from  "../utils/handleCRUD";


// const createUser = handleCRUD.createOne(userModel);
// const getAllUsers = handleCRUD.getAll(userModel);
// const getOneUser = handleCRUD. getOneById(userModel);
// const updateUser = handleCRUD.updateOneById(userModel);
// const deleteUser = handleCRUD.deleteOneById(userModel);

// export default {createUser,getAllUsers,getOneUser,updateUser,deleteUser}



import  {create,getAll,getOneById,updateOneById,deleteOneById} from "./globalController";
import userModel from "../Model/userModel";


export const createController = create(userModel)
export const getAllController = getAll(userModel)

export const getOneController = getOneById(userModel)


export const updateController = updateOneById(userModel)

export const deleteController =deleteOneById(userModel)