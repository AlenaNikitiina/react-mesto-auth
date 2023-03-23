import registration_success from "../images/registration_success";
import registration_unsuccess from "../images/registration_unsuccess";

export default function InfoTooltip( {name, isOpen, onClose, registrationForm} ) {
  return (
    <section className={`popup popup__form  popup_${name} ${isOpen ? 'popup_opened' : "" }`} >
      <div className="popup__container form">
        <button
          className="popup__close-button"
          type="button"
          aria-label="закрыть"
          onClick={onClose}
        />
        <img className='popup__image' src={registrationForm.status ? registration_success : registration_unsuccess} alt="регистрация прошла успешно" />
        <h3 className="popup__title">{registrationForm.text}</h3>
      </div>
    </section>
  )

}