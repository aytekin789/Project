import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Maincontext from '../../../context/mainContext';
import "./Basket.css"

const Basket = () => {
  const { basket, decrease, increase, removeFromBasket } = useContext(Maincontext);

  return (
    <>
      <Helmet><title>BASKET</title></Helmet>

      <div className="basket-container">
        {basket.length === 0 ? (
          <div className="empty-basket">
            <h2>Səbətiniz boşdur 😔</h2>
            <p>Zəhmət olmasa, məhsul əlavə edin!</p>
            <Link to="/">Ana səhifəyə qayıt</Link>
          </div>
        ) : (
          basket.map((item, index) => (
            <div className="basket-item" key={index}>
              <img src={item.product.image} alt="" />
              
              <div className="basket-item-info">
                <h4>{item.product.title}</h4>
                <span>{item.product.price} AZN</span>
              </div>
              
              <div className="basket-buttons">
                <button onClick={() => decrease(item)}>
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span>{item.count}</span>
                <button onClick={() => increase(item)}>
                  <i className="fa-solid fa-plus"></i>
                </button>
                <button onClick={() => removeFromBasket(item)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Basket;
