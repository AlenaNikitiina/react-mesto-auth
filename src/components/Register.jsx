/*import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register ( {handleRegister} ) {
  
  const [userData, setUserData] = useState ({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState ("");

  //
  function handleChange(e) {
    const {email, password} = e.target.value;

    setUserData ({
      ...userData,
      email,
      password,
    });
  };

  //
  function handleSubmit(e) {
    e.preventDefault();

    if (!userData.email === !userData.password) {
      return false
      .then(() => {
        setMessage("")
      })
    };
    handleRegister(userData)
    setUserData({ email: "", password: "" });
  }

  return (
    <section className="login">
      <h3 className="login__title">Регистрация</h3>
      <p className="login__error">{message}</p>
      <form className="form popup__form login__container" onSubmit={handleSubmit} >
        <input className="form__input login__input"
          name="email"
          id="youEmail"
          type="email"
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
        <button className="popup__save-button login__button form__submit" type="submit">Зарегистрироваться</button>
      </form>
      <div className="register__signin">
        <p>Уже зарегистированы?</p>
        <Link to="/login" className="register__login-link">Войти</Link>
      </div>
    </section>
  )
}
*/ 


import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register ( {handleRegister} ) {
  
  const [userData, setUserData] = useState ({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState ("");

  //
  function handleChange(e) {
    const {email, password} = e.target.value;

    setUserData ({
      ...userData,
      email,
      password,
    });
  };

  //
  function handleSubmit(e) {
    e.preventDefault();

    if (!userData.email === !userData.password) {
      return false
      .then(() => {
        setMessage("")
      })
    };
    handleRegister(userData)
    setUserData({ email: "", password: "" });
  }

  return (
    <section className="login">
      <h3 className="login__title">Регистрация</h3>
      <p className="login__error">{message}</p>
      <form className="form popup__form login__container" onSubmit={handleSubmit} >
        <input className="form__input login__input"
          name="email"
          id="youEmail"
          type="email"
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
        <button className="popup__save-button login__button form__submit" type="submit">Зарегистрироваться</button>
      </form>
      <div className="register__signin">
        <p>Уже зарегистированы?</p>
        <Link to="/login" className="register__login-link">Войти</Link>
      </div>
    </section>
  )
}
