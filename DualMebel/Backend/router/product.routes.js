const express=require("express")
const router=express.Router()
const {ProductController}=require('../controller/product.controller')
router.get("/",ProductController.getAll)
router.get("/:id",ProductController.getById)
router.post("/",ProductController.Post)
router.delete("/:id",ProductController.delete)
router.put("/:id",ProductController.edit)
module.exports=router