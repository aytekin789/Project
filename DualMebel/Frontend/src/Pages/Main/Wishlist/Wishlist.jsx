import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import Maincontext from '../../../context/mainContext'

const Wishlist = () => {
  const { wishList, removeFromWishList } = useContext(Maincontext)
  return (
    <>
      <Helmet><title>WISHLIST</title></Helmet>
      <div>
        {wishList.map((item, index) => {
          return (
            <ul>
              <li><img src={item.image} alt="" style={{ maxWidth: "200px", maxHeight: "200px" }} /> {item.title} <button onClick={() => {
                removeFromWishList(item)
              }}>delete</button></li>
            </ul>
          )
        })}
      </div>
    </>
  )
}

export default Wishlist