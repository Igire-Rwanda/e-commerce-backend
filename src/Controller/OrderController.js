import Order from "../Model/OrderModel";

class OrderModel{
    static async getAllOrder(req,res){
        const AllOrders = await Order.find();
        res.send({data:AllOrders});
    }

    static async getOneOrder(req,res){
        const AllOrder= await  Order.findById(req.params.id);
        if(!AllOrder){
            return res.status(404).json({error:"order not fund"});
        }
        return res.status(200).json({message:"order get successfull",data:AllOrder});
    }

    static async updateAll(req,res){
        const AllOrderes= await Order.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        });
        if(!AllOrderes){
            return res.status(404).json({error:"update not found"});
        }
        return res.status(200).json({message:"Updated Successfully",data:AllOrderes});
    }

    static async deleteOrder(req,res){
        const AllOrderdel= await  Order.findByIdAndDelete(req.params.id);
        if(!AllOrderdel){
            return res.status(404).json({error:"delete not found"});
        }
        return res.status(200).json({message:"deleted Successfully",data:AllOrderdel});
    }


    static async createOrder(req,res){
        try{ 
            const newOrder= new Order({
                quantity:req.body. quantity,
                shippingAddress:req.body.shippingAddress,
                totalAmount:req.body.totalAmount

            });
            newOrder.save();
            res.send(newOrder)
        }catch(error){
            res.status(400).send({message:"internal serever error ", error:error.message})
        }
    }


}
export default OrderModel;