import User from "../Models/userSchema.js";
import bcrypt from "bcryptjs";

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(404).json({ error: "User Not Found." });
    }

    const userExist = await User.findOne({ email: email });

    if (userExist) {

        const comparePass = await bcrypt.compare(password, userExist.password);

        let token = await userExist.generateAuthToken();

        res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 8920000000),
            httpOnly: true
        })

        if (comparePass) {
            res.status(200).json({ massage: "Login Successfully Completed." });
        } else {
            res.status(400).json({ error: "Invalid Credintial." });
        }
    } else {
        res.status(404).json({ error: "User Not Exits." });
    }
};

export default login;