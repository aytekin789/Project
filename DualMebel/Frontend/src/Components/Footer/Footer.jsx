import React from "react";
import "./Footer.css"; // Stil əlavə etmək üçün

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Dual Mebel</h2>
          <p>Ən Yaxşı Mebel Seçimləri</p>
        </div>

        <div className="footer-links">
          <h4>Linklər</h4>
          <ul>
            <li><a href="/">Ana Səhifə</a></li>
            <li><a href="/products">Məhsullar</a></li>
            <li><a href="/about">Haqqımızda</a></li>
            <li><a href="/contact">Əlaqə</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Əlaqə</h4>
          <ul>
            <li>Telefon: +994 (50) 123 45 67</li>
            <li>Email: info@dualmebel.az</li>
            <li>Ünvan: Bakı, Azərbaycan</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Dual Mebel. Bütün Hüquqlar Qorunur.</p>
      </div>
    </footer>
  );
};

export default Footer;