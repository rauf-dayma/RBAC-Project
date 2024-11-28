const express = require("express")
const dotenv = require("dotenv").config()
const dbConnect = require("./config/dbConnection")
const authRoutes= require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")
dbConnect();

const app = express();

//middleware 
app.use(express.json())

//routes
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
//start the server 
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})
