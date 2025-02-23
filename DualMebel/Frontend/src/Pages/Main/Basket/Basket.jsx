import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import Maincontext from '../../../context/mainContext'

const Basket = () => {
  const { basket, decrease, increase, removeFromBasket } = useContext(Maincontext)
  return (
    <>
      <Helmet><title>BASKET</title></Helmet>
      {
        basket.map((item, index) => {
          return (
            <ul>
              <li>{item.product.title}-  <strong>Qiyemt</strong>{item.product.price} <strong>TotalPrice</strong> {item.totalPrice} <strong>count</strong> {item.count} <button onClick={()=>{
                decrease(item)
              }}>decrese</button> <button onClick={()=>{
                increase(item)
              }}>increase</button> <button onClick={()=>{
                removeFromBasket(item)
              }}>delete</button></li>
            </ul>
          )
        })
      }
    </>
  )
}

export default Basket