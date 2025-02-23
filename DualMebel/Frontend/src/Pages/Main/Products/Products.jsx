import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom';
import "./Product.css"


const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products/")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  
  return (
   <>
   <Helmet><title>PRODUCTS</title></Helmet>
   <div className="container text-center ">
        <div className="row">
          {product.map((x) => (
            <div className="col-3" style={{ width: "300px" }} key={x.id}>
              <div className="cards">
                <div className="image">
                  <img src={x.image} style={{ width: "100%" }} />
                </div>
                <div className="text">
                  <h2>{x.title}</h2>
                  <p>{x.description}</p>
                </div>
                <Link to={`detail/${x.id}`}>
                  <button style={{ backgroundColor: "#a01111" }}>Detail</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
   </>
  )
}

export default Products