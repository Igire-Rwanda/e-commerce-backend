import Shipping from "../Model/ShippingModel";

class ShippingController {

    static async getAllShipping(req,res){
        const AllShippings = await Order.find();
        res.send({data:AllShippings});
    }

    static async getOneShipping(req,res){
        const AllShipping= await  Shipping.findById(req.params.id);
        if(! AllShipping){
            return res.status(404).json({error:"cart not fund"});
        }
        return res.status(200).json({message:"add to cart get successfull",data: AllShipping});
    }

    static async updateAll(req,res){
        const AllShippinges= await Shipping.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        });
        if(!AllShippinges){
            return res.status(404).json({error:"update not found"});
        }
        return res.status(200).json({message:"Updated Successfully",data:AllShippinges});
    }
    static async deleteShipping(req,res){
        const AllShippingdel= await  Shipping.findByIdAndDelete(req.params.id);
        if(!AllShippingdel){
            return res.status(404).json({error:"delete not found"});
        }
        return res.status(200).json({message:"deleted Successfully",data:AllShippingdel});
    }


    static async createShipping(req, res) {
        try {
            const newShipping = new Shipping({

                firstName: req.body.firstName,
                lastName: req.body.lastName,
                shippingAddress: req.body.shippingAddress
            });
            newShipping.save();
            res.send(newShipping)
        } catch (error) {
            res.status(400).send({ message: "internal serever error ", error: error.message })
        }
    }

}

export default ShippingController;