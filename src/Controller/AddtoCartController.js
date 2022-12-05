import AddtoCart from "../Model/AddtoCartModel";



class AddtoCartController {
 static async getAllAddtoCart(req,res){
        const AllAddtoCarts = await Order.find();
        res.send({data:AllAddtoCarts});
    }

    static async getOneAddtoCart(req,res){
        const AllAddtoCart= await  AddtoCart.findById(req.params.id);
        if(! AllAddtoCart){
            return res.status(404).json({error:"cart not fund"});
        }
        return res.status(200).json({message:"add to cart get successfull",data: AllAddtoCart});
    }

    static async updateAll(req,res){
        const AllAddtoCartes= await AddtoCart.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        });
        if(!AllAddtoCartes){
            return res.status(404).json({error:"update not found"});
        }
        return res.status(200).json({message:"Updated Successfully",data:AllAddtoCartes});
    }
    static async deleteAddtoCart(req,res){
        const AllAddtoCartdel= await  AddtoCart.findByIdAndDelete(req.params.id);
        if(!AllAddtoCartdel){
            return res.status(404).json({error:"delete not found"});
        }
        return res.status(200).json({message:"deleted Successfully",data:AllAddtoCartdel});
    }


    static async createAddtoCart(req, res){
        try {
            const newAddtoCart = new AddtoCart({
          
                quantity: req.body.quantity,
                totalPrice: req.body.totalPrice
            });
            newAddtoCart.save();
            res.send(newAddtoCart)
        } catch (error) {
            res.status(400).send({ message: "internal serever error ", error: error.message })
        }
    }
    
    
    }


export default AddtoCartController;