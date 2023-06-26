import User from "../Models/userSchema.js";

const register = async (req, res) => {
  const { name, email, phone, password, conformpassword } =
    req.body;

  console.log(req.body)
  // if (!name || !email || !phone || !password || !conformpassword) {
  //   res.status(404).json({ error: "Please Fill All Items." });
  // }

  try {
    const userValid = await User.findOne({ email: email });

    if (!userValid) {
      const userDataSave = new User({ name, email, phone, password, conformpassword });

      if (password != conformpassword) {
        res.status(400).json({ error: "Password Are Not Same." });
      }

      const response = await userDataSave.save();

      if (response) {
        res.status(201).json({ massage: "Register Successfully." });
      }
    } else {
      res.status(404).json({ massage: "User Already Exits." });
    }
  } catch (err) {
    console.log(err);
  }
};
export default register;
