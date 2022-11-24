import express from "express";
import User from "../Models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserController from "../controllers/UserController";


const router = express.Router();
router.get("/", (req, res) => {
    return res.send({ message: "All Users!!!" })
});

router.post("/login", async (req, res) => {


    try {

        const email = req.body.email;
        const password = req.body.password;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const findUser = await User.findOne({ email: email });

        if (findUser) {
            const isPasswordValid = bcrypt.compareSync(password,findUser.password);
            if (isPasswordValid) {
                const token = jwt.sign({ email: findUser.email,id:findUser._id }, "secret-key", { expiresIn: "1h" });
                return res.send({ message: "Logged In!!!", data: token });
            } else {
                return res.status(404).send({ message: "Incorrect Email or Password!!!" });
            }
        } else {
            res.status(404).send({ message: "Incorrect Email or Password!!!" });
        }

    } catch (error) {
        return res.send({ message: "Error", data: error.message })
    }
});

router.post("/",UserController.createUser);
router.get("/",UserController.getAllUsers);

export default router;
