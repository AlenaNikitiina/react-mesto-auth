/*import React, { useState } from "react";

export default function Login ( {handleLogin} ) {
  const [userEmail, setUserEmail] =       useState (''); // Стейт, в котором содержится значение инпута. Синхронная ф
  const [userPassword, setUserPassword] = useState (''); // Стейт, в котором содержится значение инпута
  const [message, setMessage] =           useState (''); // асинхрон ф меняется когда мен пропсы или юстейт

  /* очистить форму
  const resetForm = () => {
    setUserEmail('');
    setUserPassword('');
    setMessage('');
  };

  // Обработчик изменения инпута обновляет стейт
  function handleChangeName(evt) {
    setUserEmail(evt.target.value);
  };

  // Обработчик изменения инпута обновляет стейт
  function handleChangePassword(evt) {
    setUserPassword(evt.target.value);
  };
  
  
  //console.log('0000000',handleSubmit )
  //отправляет данные на сервер. асинхрон
  function handleSubmit(e) {
    e.preventDefault();

    handleLogin(userEmail, userPassword);
    //console.log("xcxzc", handleLogin);
    setUserEmail({ email: ""});
    setUserPassword({ password: ""});
    //resetForm();
    //console.log('11111111',handleSubmit )
  };

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


  function handleChangeName(e) {
    const email = e.target.value;
    setUserInfo({
      ...userInfo,
      email,
    })
  }\
*/




/*


import React, { useState } from "react";

export default function Login ( {handleLogin} ) {
  const [userEmail, setUserEmail] =       useState (''); // Стейт, в котором содержится значение инпута. Синхронная ф
  const [userPassword, setUserPassword] = useState (''); // Стейт, в котором содержится значение инпута
  const [message, setMessage] =           useState (''); // асинхрон ф меняется когда мен пропсы или юстейт

  // Обработчик изменения инпута обновляет стейт
  function handleChangeName(e) {
    const email = e.target.value;
  
    setUserEmail ({
      ...userEmail,
      email
    });
  };

  // Обработчик изменения инпута обновляет стейт
  function handleChangePassword(e) {
    const password = e.target.value;
    
    setUserPassword ({
      ...userPassword,
      password
    });
  };

      console.log('0000000',handleSubmit )

  //отправляет данные на сервер
  function handleSubmit(e) {
    e.preventDefault();

    if (!userEmail || !userPassword) {
      return false
      .then(() => setMessage(""))
    }
    handleLogin(userEmail, userPassword);
      console.log("xcxzc", handleLogin);
    setUserEmail({ email: ""});
    setUserPassword({ password: ""});
    //resetForm();
    console.log('11111111',handleSubmit)
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
          maxLength={30}
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
*/




import React, { useState } from "react";

export default function Login ( {handleLogin} ) {
  const [message, setMessage] = useState (''); // асинхрон ф меняется когда мен пропсы или юстейт
  const [userData, setUserData] = useState ({
    email: "",
    password: "",
  });

  // Обработчик изменения инпута обновляет стейт
  function handleChangeName(e) {
    const email = e.target.value;
  
    setUserData ({
      ...userData,
      email
    });
  };

  // Обработчик изменения инпута обновляет стейт
  function handleChangePassword(e) {
    const password = e.target.value;
    
    setUserData ({
      ...userData,
      password
    });
  };

    //console.log('до сабмита',handleSubmit )

  //отправляет данные на сервер
  function handleSubmit(e) {
    e.preventDefault();

    if (!userData.email || !userData.password) {
      return false
      .then(() => setMessage(""))
    }
    handleLogin(userData);
      //console.log("внутри сабмита", handleLogin);
      setUserData({ 
        email: "",
        password: ""
      })
    //console.log('после',handleSubmit)
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
          type="text"
          placeholder="Электронная почта"
          minLength={2}
          maxLength={30}
          required
          value={userData.email}
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
          value={userData.password}
          onChange={handleChangePassword}
        />
        <span className="form__input-error youPassword-error"></span>
        <button className="login__button form__submit" type="submit">Войти</button>
      </form>
    </section>
  )

}
