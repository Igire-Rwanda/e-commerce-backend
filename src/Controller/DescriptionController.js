import Description from "../Model/Description";


class DescriptionController{

static async createDescription(req,res){
    try{
        const newDescription= new Description({
            description:req.body.description,
            picture:req.file.filename
        });
        newDescription.save();
        res.send(newDescription)
    }catch(error){
        res.status(400).send({message:"internal serever error ", error:error.message})
    }
}


}



export default DescriptionController;