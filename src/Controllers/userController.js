import userInfo from "../Model/userModel";


class UserContoller {

    //function to registerUse //SignUp

    static signupUser = async(req,res)=>{
       const user = await userInfo.create(req.body)
       
       if(!user){
        return res.status(400).json({
            status:400,
            message:"failed to register"
        }) 
       }
       return res.status(200).json({
        status:200, 
        message:"Register successfully",
        data:user
       })


    }



}

export default UserContoller;

