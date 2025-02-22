const mongoose=require("mongoose")
const productSchema = new mongoose.Schema({

  name: String,

  price: Number,

  image: String

});
const Product = mongoose.model('product_imt', productSchema);

module.exports={Product}

