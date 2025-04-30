import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const translations = {
  az: {
    register: "Qeydiyyatdan Keçin",
    email: "E-mail",
    password: "Şifrə",
    confirmPassword: "Şifrəni Təkrarlayın",
    alreadyAccount: "Hesabınız var?",
    login: "Giriş",
  },
  ru: {
    register: "Зарегистрироваться",
    email: "Электронная почта",
    password: "Пароль",
    confirmPassword: "Подтвердите пароль",
    alreadyAccount: "Уже есть аккаунт?",
    login: "Вход",
  },
  en: {
    register: "Register",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    alreadyAccount: "Already have an account?",
    login: "Login",
  }
};

const Register = () => {
  const [language, setLanguage] = useState("az");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Burada qeydiyyat funksionallığını əlavə edin
      navigate("/login");
    } else {
      alert("Şifrələr uyğun deyil!");
    }
  };

  return (<>
  <Helmet><title>REGISTER</title></Helmet>
    <div className="auth-container">
      <h2>{translations[language].register}</h2>
      <form onSubmit={handleRegister} className="auth-form">
        <div className="input-group">
          <label htmlFor="email">{translations[language].email}</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder={translations[language].email}
            />
        </div>

        <div className="input-group">
          <label htmlFor="password">{translations[language].password}</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder={translations[language].password}
            />
        </div>

        <div className="input-group">
          <label htmlFor="confirmPassword">{translations[language].confirmPassword}</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder={translations[language].confirmPassword}
            />
        </div>

        <button type="submit">{translations[language].register}</button>

        <p>
          {translations[language].alreadyAccount} <a href="/login" style={{color:'#a83279'}}>{translations[language].login}</a>
        </p>
      </form>
    </div>
            </>
  );
};

export default Register;
