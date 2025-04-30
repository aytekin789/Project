import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const translations = {
  az: {
    login: "Giriş",
    email: "E-mail",
    password: "Şifrə",
    noAccount: "Hesabınız yoxdur?",
    register: "Qeydiyyatdan keçin",
  },
  ru: {
    login: "Вход",
    email: "Электронная почта",
    password: "Пароль",
    noAccount: "Нет аккаунта?",
    register: "Зарегистрироваться",
  },
  en: {
    login: "Login",
    email: "Email",
    password: "Password",
    noAccount: "Don't have an account?",
    register: "Register",
  }
};

const Login = () => {
  const [language, setLanguage] = useState("az");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Burada login funksionallığını əlavə edin, məsələn, API çağırışı
    if (email && password) {
      navigate("/");
    }
  };

  return (<>
  <Helmet><title>LOGIN</title></Helmet>
    <div className="auth-container">
      <h2>{translations[language].login}</h2>
      <form onSubmit={handleLogin} className="auth-form">
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

        <button type="submit">{translations[language].login}</button>

        <p>
          {translations[language].noAccount} <a href="/register" style={{color:'#a83279'}}>{translations[language].register}</a>
        </p>
      </form>
    </div>
            </>
  );
};

export default Login;
