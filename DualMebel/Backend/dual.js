const express = require("express")
const app = express()
const ProductRouter=require("./router/product.routes")
const userRouter=require("./router/user.routes")
const cors = require("cors")
const mongoose = require("mongoose")
// require('dotenv').config()
app.use(cors())
const PORT = process.env.PORT || 3000
app.use(express.json())
mongoose.connect("mongodb+srv://aytakinymbp109:aytakin@bp-109.q2j8u.mongodb.net/").then(res => {
  console.log("connected to mongodb")
})
app.use("/products", ProductRouter)
app.use("/user",userRouter)
app.listen(PORT, () => {
  console.log("connected to back")
})