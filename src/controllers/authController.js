const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { userName, password, role } = req.body; // Correct variable names
    const hashedPassword = await bcrypt.hash(password, 10); // Use the corrected `password`

    const newUser = new User({ userName, password: hashedPassword, role }); // Properly pass the corrected fields
    await newUser.save();

    res.status(201).json({
      message: `User registered successfully with userName ${userName}`,
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
};


const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({message : "invalid credencial"})
    }
    const token = jwt.sign(
        {id: user._id, role: user.role}, process.env.JWT_SECRETE, {expiresIn: "1h"}
    )
    res.status(200).json(token)
  } catch (err) {
    res.status(500).json({ message: "somethinng went wrong" });
  }
};

module.exports = {
  register,
  login,
};
