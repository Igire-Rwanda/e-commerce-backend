import Payment from "../Model/PaymentModel";


class PaymentController {

    static async getAllPayment(req, res) {
        const AllPayments = await Order.find();
        res.send({ data: AllPayments });
    }

    static async getOnePayment(req, res) {
        const AllPayment = await Payment.findById(req.params.id);
        if (!AllPayment) {
            return res.status(404).json({ error: "payment not fund" });
        }
        return res.status(200).json({ message: "add to Payment get successfull", data: AllPayment });
    }

    static async updateAll(req, res) {
        const AllPaymentes = await Payment.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!AllPaymentes) {
            return res.status(404).json({ error: "update not found" });
        }
        return res.status(200).json({ message: "Updated Successfully", data: AllPaymentes });
    }
    static async deletePayment(req, res) {
        const AllPaymentdel = await Payment.findByIdAndDelete(req.params.id);
        if (!AllPaymentdel) {
            return res.status(404).json({ error: "delete not found" });
        }
        return res.status(200).json({ message: "deleted Successfully", data: AllPaymentdel });
    }

    static async createPayment(req, res) {
        try {
            const newPayment = new Payment({

                NameofCard: req.body.NameofCard,
                cardNmber: req.body.cardNmber,
                expiredDate: req.body.expiredDate,
                password: req.body.password
            });
            newPayment.save();
            res.send(newPayment)
        } catch (error) {
            res.status(400).send({ message: "internal serever error ", error: error.message })
        }
    }
}
export default PaymentController;