import exprees from "express"
import { AdminuserModel } from "../Modules/Admin.Modules.js"
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import bcrypt from 'bcrypt'

const AdminuserRoutes = exprees.Router();



AdminuserRoutes.post("/registration", async (req, res) => {
    let { username, password, email } = req.body;

    try {
        if (!username || !password || !email) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newAdminuser = new AdminuserModel({ username, password: hashedPassword, email });
        await newAdminuser.save();
        res.status(201).json({ message: "Adminuser registered successfully" });
    } catch (error) {
        res.status(400).json({ message: "Error in the registering adminuser data in the database: ", error: error.message });
    }
})

AdminuserRoutes.post("/login", async (req, res) => {
    let { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const adminuser = await AdminuserModel.findOne({ email });
        if (!adminuser) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const isMatch = await bcrypt.compare(password, adminuser.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid username or password" });
        }


        const token = jwt.sign({ id: adminuser._id, username: adminuser.username }, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h'
        })

        res.status(200).json({ message: "login successful", token: token });

    } catch (error) {
        res.status(500).json({ message: "Error in the login process: ", error: error.message });
    }
})

export default AdminuserRoutes;