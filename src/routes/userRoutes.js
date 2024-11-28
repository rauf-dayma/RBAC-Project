const express = require("express")
const router =express.Router()
const authorizeRoles = require("../middlewares/roleMiddleware")
const verifyToken = require("../middlewares/autmiddleware")

// only admin can acess this routes
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res)=>{
    res.json({message: "wellcome admin"})
})

// both admin and moderator can access this routes 
router.get("/moderator", verifyToken, authorizeRoles("admin", "moderator"), (req, res)=>{
    res.json({message: "wellcome moderator"})
})

// all can access this routes
router.get("/user", verifyToken, verifyToken, authorizeRoles("admin", "moderator", "user"),(req, res)=>{
    res.json({message: "wellcome user"})
})

module.exports = router;