// import React, { useContext } from 'react'
// import { Helmet } from 'react-helmet-async'
// import Maincontext from '../../../context/mainContext'

// const Wishlist = () => {
//   const { wishList, removeFromWishList } = useContext(Maincontext)
//   return (
//     <>
//       <Helmet><title>WISHLIST</title></Helmet>
//       <div>
//         {wishList.map((item, index) => {
//           return (
//             <ul>
//               <li><img src={item.image} alt="" style={{ maxWidth: "200px", maxHeight: "200px" }} /> {item.title} <button onClick={() => {
//                 removeFromWishList(item)
//               }}>delete</button></li>
//             </ul>
//           )
//         })}
//       </div>
//     </>
//   )
// }

// export default Wishlist
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Maincontext from '../../../context/mainContext';
import './Wishlist.css';

const Wishlist = () => {
  const { wishList, removeFromWishList } = useContext(Maincontext);

  return (
    <>
      <Helmet><title>WISHLIST</title></Helmet>
      <div className="wishlist-container">
        {wishList.length === 0 ? (
          <div className="empty-wishlist">
            <h2>Siyahınız boşdur 😔</h2>
            <p>Zəhmət olmasa, məhsul əlavə edin!</p>
            <Link to="/">Ana səhifəyə qayıt</Link>
          </div>
        ) : (
          wishList.map((item, index) => (
            <div className="wishlist-item" key={index}>
              <img src={item.image} alt="" />
              <div className="wishlist-item-info">
                <h4>{item.title}</h4>
                <span>{item.price} AZN</span>
              </div>
              <button className="remove-button" onClick={() => removeFromWishList(item)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Wishlist;

