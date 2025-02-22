import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async'; 
import "./Contact.css"

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız göndərildi!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Əlaqə - Dual Mebel</title>
      </Helmet>
      
      <div className="contact-container">
        <h1>Əlaqə</h1>
        <p>Bizimlə əlaqə saxlamaq üçün aşağıdakı formu doldurun.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Adınız:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Adınızı daxil edin"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email ünvanınızı daxil edin"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mesajınız:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Mesajınızı yazın"
            />
          </div>

          <button type="submit">Göndər</button>
        </form>

        <div className="contact-info">
          <h3>Əlaqə məlumatları:</h3>
          <p><strong>Telefon:</strong> +994 50 123 45 67</p>
          <p><strong>Email:</strong> <a href="mailto:dualmebel@gmail.com">dualmebel@gmail.com</a></p>
        </div>
      </div>
    </>
  );
};

export default Contact;