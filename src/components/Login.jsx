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



import { useEffect } from "react";
import { useHistory } from "react";
import React, { useState } from "react";

export default function Login ( {onlogin} ) {

  const [userName, setUserName] = useState ('');
  const history = useHistory();
  const [userPassword, setUserPassword] = useState ('');
  const [message, setMessage] = useState (''); // асинхрон ф меняется когда мен пропсы или юстейт
  //
  const resetForm = () => {
    setMessage('');
    setUserName('');
    setUserPassword('');
  }

  //
  function handleChangeName(e) {
    setUserName (e.target.value);
  };

  function handleChangePassword(e) {
    setUserPassword (e.target.value);
  };

  //отправляет данные на сервер. асинхрон
  function handleSubmit(e) {
    e.preventDefault();
    onlogin({userName, userPassword})
      .then(resetForm())
      .then(() => history.push('/ducs'))
      .catsh((err) => console.log('err'));
  }

  //
  useEffect (() => {
    if (localStorage.getItem('jwt')) {
      history.push();
    }

  }, []);

  
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
        <button className="popup__save-button login__button form__submit" type="submit">Войти</button>
      </form>
    </section>
  )

}