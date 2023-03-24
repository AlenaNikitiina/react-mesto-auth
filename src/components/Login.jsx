import React, { useState } from "react";
import { authorize } from "../utils/auth";

export default function Login ( {handleLogin} ) {

  const [userEmail, setUserEmail] =       useState (''); // Стейт, в котором содержится значение инпута
  const [userPassword, setUserPassword] = useState (''); // Стейт, в котором содержится значение инпута
  const [message, setMessage] =           useState (''); // асинхрон ф меняется когда мен пропсы или юстейт

  // очистить форму
  const resetForm = () => {
    setUserEmail('');
    setUserPassword('');
    setMessage('');
  }

  // Обработчик изменения инпута обновляет стейт
  function handleChangeName(e) {
    setUserEmail(e.target.value);
  };

  // Обработчик изменения инпута обновляет стейт
  function handleChangePassword(e) {
    setUserPassword(e.target.value);
  };

  //отправляет данные на сервер. асинхрон
  function handleSubmit(e) {
    e.preventDefault();

    //if (!userEmail.email || !userPassword.password) {
    authorize(userEmail, userPassword);
    setUserEmail({ email: ""});
    setUserPassword({ password: ""});
  }

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
          value={userEmail.email}
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
