const {Product}=require('../schema/product.schema')


const ProductController={
    getAll:async(req,res)=>{
        try{
            const target=await Product.find()
            res.send(target)

        }catch(error){
            res.send("item is not found")
        }
    },
    getById:async(req,res)=>{
        try{
            const {id}=req.params
            const productone=await Product.findById(id)
            res.send(productone)

        }catch(error){
            res.send("item is not found")
        }
    },
    Post:async(req,res)=>{
        try{
            const {name,price,image}=req.body
            const NewProduct=new Product({name,price,image})
             await NewProduct.save()
             res.send(NewProduct)

        }catch(error){
            res.send("item is not found")
        }
    },
   
    delete:async(req,res)=>{
        try{
            const{id}=req.params
            await Product.findByIdAndDelete(id)
            res.send("deleted")
        }catch(error){
            res.send("item is not found")
        }
    },
    edit: async (req, res) => {
        try {
           const {id}=req.params
           const {name,price,image}=req.body
           const target= await Product.findByIdAndUpdate(id,{name,price,image})  
        res.send(target)
        } catch (error) {
            res.send("item is not a fount")
        }
    },
}

module.exports={ProductController}