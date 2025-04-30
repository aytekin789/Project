import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Main.css";
import Maincontext from '../../../context/mainContext';

const translations = {
  az: {
    home: "Ana Səhifə",
    products: "Məhsullar",
    contact: "Əlaqə",
    about: "Haqqımızda",
    searchPlaceholder: "Axtar...",
    cart: "Səbət",
    wishlist: "İstək siyahısı",
    siteName: "Dual Mebel",
    login: "Giriş",
    register: "Qeydiyyat",
  },
  ru: {
    home: "Главная",
    products: "Продукты",
    contact: "Контакты",
    about: "О нас",
    searchPlaceholder: "Поиск...",
    cart: "Корзина",
    wishlist: "Список желаемого",
    siteName: "Дуал Мебель",
    login: "Вход",
    register: "Регистрация",
  },
  en: {
    home: "Home",
    products: "Products",
    contact: "Contact",
    about: "About Us",
    searchPlaceholder: "Search...",
    cart: "Cart",
    wishlist: "Wishlist",
    siteName: "Dual Furniture",
    login: "Login",
    register: "Register",
  }
};

const MainNavbar = () => {
  const { handlerSearch } = useContext(Maincontext);
  const [language, setLanguage] = useState("az"); // Default dil Azərbaycan

  return (
    <>
      <div className='header'>
        <div className="logo">
          <Link><h1>{translations[language].siteName}</h1></Link>
        </div>

        <div className="navbar">
          <nav>
            <ul>
              <li><Link to="/">{translations[language].home}</Link></li>
              <li><Link to="/products">{translations[language].products}</Link></li>
              <li><Link to="/contact">{translations[language].contact}</Link></li>
              <li><Link to="/about">{translations[language].about}</Link></li>
              <li><Link to="/login">{translations[language].login}</Link></li>
              <li><Link to="/register">{translations[language].register}</Link></li>
            </ul>
          </nav>

        </div>
        <div className='bars' style={{color:'white', fontSize:'24px'}}><i class="fa-solid fa-bars"></i></div>

        <div className="search-icons">
          <input
            type="text"
            placeholder={translations[language].searchPlaceholder}
            onChange={(e) => handlerSearch(e.target.value.toLocaleLowerCase().trim())}
          />
          <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
          <Link to="/basket"><i className="fa-solid fa-cart-shopping"></i></Link>
          <Link to="/wishlist"><i className="fa-solid fa-heart"></i></Link>
        </div>

        {/* 🌍 Dil Seçim Düyməsi */}
        <div className="language-selector">
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="az">🇦🇿 AZ</option>
            <option value="ru">🇷🇺 RU</option>
            <option value="en">🇬🇧 EN</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default MainNavbar;
