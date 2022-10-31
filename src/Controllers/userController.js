import userModel from "../Model/userModel";
import handleCRUD from  "../utils/handleCRUD";

const createUser = handleCRUD.createOne(userModel);
const getAllUsers = handleCRUD.getAll(userModel);
const getOneUser = handleCRUD. getOneById(userModel);
const updateUser = handleCRUD.updateOneById(userModel);
const deleteUser = handleCRUD.deleteOneById(userModel);

export default {createUser,getAllUsers,getOneUser,updateUser,deleteUser}