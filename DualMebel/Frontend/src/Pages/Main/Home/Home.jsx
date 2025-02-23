import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import "./Home.css"
import Maincontext from '../../../context/mainContext'

const Home = () => {

  const {data , AddToBasket,addtoWishList}=useContext(Maincontext)
  console.log("first", data)
  return (
<>
<Helmet><title>HOME</title></Helmet>
<div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/Image/first.webp"  className="d-block w-100" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
    <p>Dual Mebelin hər parçası zövq, hər detalı keyfiyyətdi!</p>
  </div>
          </div>
          <div className="carousel-item">
            <img src="/Image/second.jpg" className="d-block w-100" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
    <p>Rahatlıq və dəbli dizayn – Dual Mebel ilə evinizdə!</p>
  </div>
          </div>
          <div className="carousel-item">
            <img src="/Image/three.avif" className="d-block w-100" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
    <p>Evinizin hər guşəsində incəlik və keyfiyyət!</p>
  </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="cards__all">
        {data.map((item,index)=>{
          return(
            <li>
              {item.title}
              <button onClick={()=>{
                AddToBasket(item)
              }}>basket</button>
              <button onClick={()=>{
                addtoWishList(item)
              }}>fav</button>
            </li>
          )
        })}
      </div>
</>
    
  )
}

export default Home