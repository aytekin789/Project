import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Main/Home/Home";
import Products from "./Pages/Main/Products/Products";
import Contact from "./Pages/Main/Contact/Contact";
import Basket from "./Pages/Main/Basket/Basket";
import Wishlist from "./Pages/Main/Wishlist/Wishlist";
import Detail from "./Pages/Main/Detail/Detail";
import Admin from "./Layout/Admin";
import AdminProduct from "./Pages/Admin/AdminProduct/AdminProduct";
import Add from "./Pages/Admin/Add/Add";
import { HelmetProvider } from "react-helmet-async";
import NoPage from "./Pages/NoPage";
import Maincontext from "./context/mainContext";
import Edit from './Pages/Admin/Edit/Edit'
import { useEffect, useState } from "react";
import axios from 'axios'
export default function App() {
  const [data, setData] = useState([])
  const [wishList, setWishList] = useState(localStorage.getItem("wish") ? JSON.parse(localStorage.getItem("wish")) : [])

  const [basket, setBasket] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])
  useEffect(() => {
    axios.get("http://localhost:3000/products").then(res => {
      console.log(res.data)
      setData(res.data)

    })
  }, [])

  function AddToBasket(product) {
    const target = basket.find((item) => item.product.id == product.id)
    if (target) {
      target.count += 1,
        target.totalPrice = target.product.price * target.count
      setBasket([...basket])
      localStorage.setItem("basket", JSON.stringify([...basket]))

    }
    else {
      const newBasketItem = {
        count: 1,
        totalPrice: product.price,
        id: product.id,
        product: product
      }
      setBasket([...basket, newBasketItem])
      localStorage.setItem("basket", JSON.stringify([...basket, newBasketItem]))
      toast.success("added to basket")

    }
  }


  const decrease = (product) => {
    const target = basket.find(item => item.id == product.id)
    if (target.count > 1) {
      target.count -= 1
      target.totalPrice = target.product.price * target.count
      setBasket([...basket])
      localStorage.setItem("basket", JSON.stringify([...basket]))
    }
  }




  function increase(product) {
    const target = basket.find((item) => item.id == product.id)
    console.log(target.product.id)
    target.count += 1
    target.totalPrice = target.product.price * target.count
    setBasket([...basket])
    localStorage.setItem("basket", JSON.stringify([...basket]))

  }

  const removeFromBasket = (product) => {
    const target = basket.find(item => item.id == product.id)
    basket.splice(basket.indexOf(target), 1)
    setBasket([...basket])
    localStorage.setItem("basket", JSON.stringify([...basket]))
  }

  const addtoWishList = (product) => {
    const target = wishList.find(item => item.id == product.id)
    if (target) {
      alert("wishListinizde Movcuddur")
    }
    else {
      setWishList([...wishList, product])
      localStorage.setItem("wish", JSON.stringify([...wishList, product]))
      alert("added to wishList")
    }

  }


  const removeFromWishList = (product) => {
    const target = wishList.find(item => item.id == product.id)
    wishList.splice(wishList.indexOf(target), 1)
    setWishList([...wishList])
    localStorage.setItem("wish", JSON.stringify([...wishList]))
    alert("deleted data")

  }





  const datas = {
    data,
    AddToBasket,
    basket,
    decrease,
    increase,
    removeFromBasket,
    addtoWishList,
    wishList,
    removeFromWishList

  }
  return (
    <HelmetProvider>
      <Maincontext.Provider value={datas}>


        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="contact" element={<Contact />} />
              <Route path="basket" element={<Basket />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path=":id" element={<Detail />} />
              {/* <Route path="*" element={<NoPage/>} /> */}
            </Route>


            <Route path="/admin" element={<Admin />}>
              <Route index element={<AdminProduct />} />
              <Route path="add" element={<Add />} />
              <Route path="edit/:id" element={<Edit />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </Maincontext.Provider>
    </HelmetProvider>
  );
}
