const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

 const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header
  
    if (!token) { 
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }
  
    try {
      const decoded = jwt.verify(token,process.env.JWT_SECRETE); // Verify token
      req.user = decoded; 
      console.log("the decoded user  is : ", req.user)
  
     
  
      next();
    } catch (err) {
      return res.status(400).json({ message: "Invalid token." });
    }
  };

  module.exports = verifyToken;