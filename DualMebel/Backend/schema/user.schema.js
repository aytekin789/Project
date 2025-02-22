const mongoose=require("mongoose")
const userSchema=mongoose.model("userSchemee",new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,default:"user",enum:["user","admin"]},
}))
module.exports={userSchema}