import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom';
import "./Product.css"
import Maincontext from '../../../context/mainContext';


const Products = () => {
  const {data ,handlerSort }=useContext(Maincontext)
  const [product, setProduct] = useState([]);

  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/products/")
      .then((res) => res.json())
      .then((data) => {
        // setProduct(data),
      
      
        setIsLoading(false)})
        
  }, []);

 

  
  return (

   <>
   <Helmet><title>PRODUCTS</title></Helmet>
   {isloading ? (<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
   ):(<div className="container text-center ">
    <div className="row">
     
    <select name="sort" id="sort" onChange={handlerSort}>
    <option value="df">Default</option>
    <option value="az">A-dan Z-yə</option>
    <option value="za">Z-dən A-ya</option>
    <option value="09">Qiymət: azdan çoxa</option>
    <option value="90">Qiymət: çoxdan aza</option>
  </select>


      {data.map((x) => (
        <div className="col-3" style={{ width: "300px" }} key={x.id}>
          <div className="cards">
            <div className="image">
              <img src={x.image} style={{ width: "100%" }} />
            </div>
            <div className="text">
              <h2>{x.title}</h2>
              <p>{x.description}</p>
            </div>
            <Link to={`/detail/${x._id}`}>
              <button style={{ backgroundColor: "#a01111" }}><i class="fa-solid fa-circle-info"></i></button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>)}
   
   </>
  )
}

export default Products