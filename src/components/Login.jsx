/*
import React, { useState } from "react";

export default function Login ( {handleLogin} ) {

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
    handleLogin(userData)
    setUserData({ email: "", password: "" });
  }

  
  return (
    <section className="login" onSubmit={handleSubmit}>
      <h3 className="login__title">Вход</h3>
      <p className="login__error">{message}</p>
      <form className="form popup__form login__container">
        <input
          className="form__input login__input"
          name="email"
          id="youEmail"
          type="email"
          placeholder="Электронная почта"
          minLength={2}
          maxLength={20}
          required
          value={userData.email}
          onChange={handleChange}
        />
        <span className="form__input-error youEmail-error"></span>
        <input
          className="form__input login__input"
          name="password"
          id="youPassword"
          type="text"
          placeholder="Пароль"
          minLength={2}
          maxLength={20}
          required
          value={userData.password}
          onChange={handleChange}
        />
        <span className="form__input-error youPassword-error"></span>
        <button className="popup__save-button login__button form__submit" type="submit">Войти</button>
      </form>
    </section>
  )

}
*/



import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function Login ( {onlogin} ) {

  const navigate = useNavigate(); // возвр ф, которую мы можем использовать для навигации
  const [userName, setUserName] =         useState (''); // Стейт, в котором содержится значение инпута
  const [userPassword, setUserPassword] = useState ('');
  const [message, setMessage] =           useState (''); // асинхрон ф меняется когда мен пропсы или юстейт

  // очистить форму
  const resetForm = () => {
    setUserName('');
    setUserPassword('');
    setMessage('');
  }

  // Обработчик изменения инпута обновляет стейт
  function handleChangeName(e) {
    setUserName(e.target.value);
  };

  // Обработчик изменения инпута обновляет стейт
  function handleChangePassword(e) {
    setUserPassword(e.target.value);
  };

  //отправляет данные на сервер. асинхрон
  function handleSubmit(e) {
    e.preventDefault();

    onlogin( {userName, userPassword} )
      .then(resetForm())
      .then(() => navigate.push('/ducs'))
      .catsh((err) => console.log('err'));
  }

  /*
  useEffect (() => {
    if (localStorage.getItem('jwt')) {
      navigate.push();
    }
  }, []);
  */
  return (
    <section className="login">
      <h3 className="login__title">Вход</h3>
      <p className="login__error">{message}</p>
      <form className="form popup__form login__container" onSubmit={handleSubmit}>
        <input
          className="form__input login__input"
          name="email"
          id="youEmail"
          type="text"
          placeholder="Электронная почта"
          minLength={2}
          maxLength={20}
          required
          value={userName.email}
          onChange={handleChangeName}
        />
        <span className="form__input-error youEmail-error"></span>
        <input
          className="form__input login__input"
          name="password"
          id="youPassword"
          type="text"
          placeholder="Пароль"
          minLength={2}
          maxLength={20}
          required
          value={userPassword.password}
          onChange={handleChangePassword}
        />
        <span className="form__input-error youPassword-error"></span>
        <button className="login__button form__submit" type="submit">Войти</button>
      </form>
    </section>
  )

}


/*login__error" what is this &   */

