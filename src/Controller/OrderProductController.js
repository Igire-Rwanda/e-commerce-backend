import OrderProduct from "../Model/OrderProductModel";


class OrderProductController{
    static async getAllOrderProduct(req,res){
        const AllOrderProducts = await Order.find();
        res.send({data:AllOrderProducts});
    }

    static async getOneOrderProduct(req,res){
        const AllOrderProduct= await  OrderProduct.findById(req.params.id);
        if(! AllOrderProduct){
            return res.status(404).json({error:"order not fund"});
        }
        return res.status(200).json({message:"order get successfull",data: AllOrderProduct});
    }
    static async updateAll(req,res){
        const AllOrderProductes= await OrderProduct.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        });
        if(!AllOrderProductes){
            return res.status(404).json({error:"update not found"});
        }
        return res.status(200).json({message:"Updated Successfully",data:AllOrderProductes});
    }
    static async deleteOrderProduct(req,res){
        const AllOrderProductdel= await  OrderProduct.findByIdAndDelete(req.params.id);
        if(!AllOrderProductdel){
            return res.status(404).json({error:"delete not found"});
        }
        return res.status(200).json({message:"deleted Successfully",data:AllOrderProductdel});
    }

    static async createOderProduct(req, res){
        try {
            const newOderProduct = new OrderProduct({
                name: req.body.name
            });
            newOderProduct.save();
            res.send(newOderProduct)
        } catch (error) {
            res.status(400).send({ message: "internal serever error ", error: error.message })
        }
    }
}
export default OrderProductController;