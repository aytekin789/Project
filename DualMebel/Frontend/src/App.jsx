import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Main/Home/Home";
import Products from "./Pages/Main/Products/Products";
import Contact from "./Pages/Main/Contact/Contact";
import Basket from "./Pages/Main/Basket/Basket";
import Wishlist from "./Pages/Main/Wishlist/Wishlist";
import About from "./Pages/Main/About/About"
import Detail from "./Pages/Main/Detail/Detail";
import Admin from "./Layout/Admin";
import AdminProduct from "./Pages/Admin/AdminProduct/AdminProduct";
import Add from "./Pages/Admin/Add/Add";
import { HelmetProvider } from "react-helmet-async";
import NoPage from "./Pages/NoPage";
import Maincontext from "./context/mainContext";
import Edit from './Pages/Admin/Edit/Edit'
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

import axios from 'axios'
import Login from "./Pages/Main/LoginRegister/Login";
import Register from "./Pages/Main/LoginRegister/Register";
export default function App() {
  const [data, setData] = useState([])
  const [wishList, setWishList] = useState(localStorage.getItem("wish") ? JSON.parse(localStorage.getItem("wish")) : [])
  const [basket, setBasket] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])
  const [search,setSearch]=useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/products").then(res => {
      console.log(res.data)
      setData(res.data)
      setSearch(res.data)
     

    })
  }, [])

  function AddToBasket(product) {
    const target = basket.find((item) => item.product._id == product._id);

    if (target) {
        if (target.count >= 5) {
            toast.error("You can add max 5 items of this product!");
            return; // Əgər məhsulun sayı 5-dirsə, funksiyanı dayandırırıq.
        }

        target.count += 1;
        target.totalPrice = target.product.price * target.count;
        setBasket([...basket]);
        localStorage.setItem("basket", JSON.stringify([...basket]));
        toast.success("Added to basket");
    } else {
        const newBasketItem = {
            count: 1,
            totalPrice: product.price,
            id: product._id,
            product: product,
        };

        setBasket([...basket, newBasketItem]);
        localStorage.setItem("basket", JSON.stringify([...basket, newBasketItem]));
        toast.success("Added to basket");
    }
}



  const decrease = (product) => {
    const target = basket.find(item => item.id == product.id)
    if (target.count > 1) {
      target.count -= 1
      target.totalPrice = target.product.price * target.count
      setBasket([...basket])
      localStorage.setItem("basket", JSON.stringify([...basket]))
      toast.success("decresed product")
    }
  }




  function increase(product) {
    const target = basket.find((item) => item.id == product.id);

    if (target.count >= 5) {
        toast.error("You can add max 5 items of this product!");
        return; // Əgər sayı 5-dirsə, artırmağa icazə vermirik
    }

    target.count += 1;
    target.totalPrice = target.product.price * target.count;
    setBasket([...basket]);
    localStorage.setItem("basket", JSON.stringify([...basket]));
    toast.success("Increased product");
}


  const removeFromBasket = (product) => {
    const target = basket.find(item => item._id == product._id)
    basket.splice(basket.indexOf(target), 1)
    setBasket([...basket])
    localStorage.setItem("basket", JSON.stringify([...basket]))
  }

  const addtoWishList = (product) => {
    const target = wishList.find(item => item._id == product._id)
    if (target) {
      toast.error("wishListinizde Movcuddur")
    }
    else {
      setWishList([...wishList, product])
      localStorage.setItem("wish", JSON.stringify([...wishList, product]))
      toast.success("added to wishList")
    }

  }


  const removeFromWishList = (product) => {
    const target = wishList.find(item => item._id == product._id)
    wishList.splice(wishList.indexOf(target), 1)
    setWishList([...wishList])
    localStorage.setItem("wish", JSON.stringify([...wishList]))
   toast.error("deleted data form your favorite")

  }



  const handlerSort = (e) => {
    let sorting = e.target.value;
    
    if (sorting === "df") {
      setData([...data]); // Dəyişiklik etmədən datanı yenidən yükləyirik
    } 
    else if (sorting === "az") {
      const sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title));
      setData(sortedData);
    } 
    else if (sorting === "za") {
      const sortedData = [...data].sort((a, b) => b.title.localeCompare(a.title));
      setData(sortedData);
    } 
    else if (sorting === "09") {
      const sortedData = [...data].sort((a, b) => a.price - b.price);
      setData(sortedData);
    } 
    else if (sorting === "90") {
      const sortedData = [...data].sort((a, b) => b.price - a.price);
      setData(sortedData);
    }
  };


  const handlerSearch=(searchValue)=>{
    if(searchValue==''){
      setData([...search])
    }else{
      setData([...search.filter(item=>item.title.toLowerCase().trim().includes(searchValue))])
    }
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
    removeFromWishList,
   
    setData,
    handlerSort,
    handlerSearch,


    
    

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
              <Route path="about" element={<About/>} />
              <Route path="detail/:id" element={<Detail />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
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
      <Toaster/>
    </HelmetProvider>
  );
}
