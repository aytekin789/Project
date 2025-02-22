const mongoose=require("mongoose")
const productSchema = new mongoose.Schema({

  image: String,

  title: String,

  description: String,

  category: String,

  price: Number

});
const Product = mongoose.model('product_imt', productSchema);

module.exports={Product}

