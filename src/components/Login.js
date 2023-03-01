import React from "react";

export default function Login () {



  return (
    <section className="login">
      <h2 className="login__title">Вход</h2>
      <form className="form ">
        <imput className="form__input popup__input"
          name=""
          id="youEmail"
          type="email"
          placeholder="Электронная почта"
          minlength="2"
          required
        />
        <span className="form__input-error youEmail-error"></span>
        <imput className="form__input popup__input"
          name=""
          id="youPassword"
          type="password"
          placeholder="Пароль"
          minlength="2"
          required
        />
        <span className="form__input-error youPassword-error"></span>
        <button className="popup__save-button popup__button form__submit" type="submit"></button>
      </form>
    </section>
  )
}