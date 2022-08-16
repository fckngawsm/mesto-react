import React from "react";

export default function PopupWithForm({props}) {
  return (
    <div
      className={
        props.isOpen
          ? `popup popup_${props.name} popup_is-opened`
          : `popup popup_${props.name}`
      }
    >
      <button
        type="button"
        className="popup__close"
      ></button>
      <form className="popup__form" name="form-edit" noValidate>
        <fieldset className="popup__information">
        <h2 className="popup__title">{props.title}</h2>
        <input
          id="title-input"
          type="text"
          placeholder="Название"
          name={props.name}
          required
          maxLength="30"
          minLength="2"
          className="popup__text popup__text_type_name"
        />
        {props.children}
        <button
          type="submit"
          className="popup__submit-btn"
        >
          {props.button}
        </button>
        </fieldset>
      </form>
    </div>
  );
}

