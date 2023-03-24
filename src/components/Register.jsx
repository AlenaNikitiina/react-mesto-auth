import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../utils/auth";

export default function Register ( {handelRegistration} ) {
  
  const [userData, setUserData] = useState ({
    email: "",
    password: "",
  });

  //
  function handleChange(e) {
    const {email, password} = e.target.value;
    //??
    setUserData ({
      ...userData,
      email, //??
      password,
    });
  };

  /* ????????????
  function handleSubmit(e) {
    e.preventDefault();

    if (!userData.email || !userData.password) {
      return false;
    }
    handelRegistration(userData)
    setUserData({ email: "", password: "" });
  }
*/

 //отправляет данные на сервер. асинхрон
 function handleSubmit(e) {
  e.preventDefault();

  //if (!userEmail.email || !userPassword.password) {
    handelRegistration(userData)
  register(userData.email, userData.password);
  setUserData({ email: ""});
  setUserData({ password: ""});
}

  return (
    <section className="login">
      <h3 className="login__title">Регистрация</h3>
      <form className="form popup__form login__container" onSubmit={handleSubmit} >
        <input className="form__input login__input"
          name="email"
          id="youEmail"
          type="text"
          placeholder="Электронная почта"
          minLength="2"
          onChange={handleChange}
          value={userData.email}
          required
        />
        <span className="form__input-error youEmail-error"></span>
        <input className="form__input login__input"
          name="password"
          id="youPassword"
          type="text"
          placeholder="Пароль"
          minLength="2"
          onChange={handleChange}
          value={userData.password}
          required
        />
        <span className="form__input-error youPassword-error"></span>
        <button className="login__button form__submit" type="submit">Зарегистрироваться</button>
      </form>
      <p className="login__link">Уже зарегистированы?&nbsp;
        <Link to="/" className="login__link">Войти</Link>
      </p>
    </section>
  )
}
