import React, { useState } from "react";

import "../index.css";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import PopupWithForm from "../components/PopupWithForm";


function App() {
  // редактирование профиля
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState();
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  // добавление новой карточки
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  // изменение аватарки
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  // закрытие попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    console.log("popup is closed!");
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      {/* попап редактирования профиля */}
      <PopupWithForm
        onClose={closeAllPopups}
        name={"profile"}
        isOpen={isEditProfilePopupOpen}
        title={"Редактировать профиль"}
      >
        <input
          id="name"
          type="text"
          placeholder="Ваше имя"
          name="name"
          className="popup__text popup__text_type_name"
          defaultValue=""
          maxLength="40"
          minLength="2"
          required
        />
        <span id="name_error" className="popup__error ">
          Вы пропустили это поле.
        </span>
        <input
          id="job"
          type="text"
          placeholder="Ваша работа"
          name="about"
          className="popup__text popup__text_type_status"
          defaultValue=""
          maxLength="200"
          minLength="2"
          required
        />
        <span id="job_error" className="popup__error ">
          Вы пропустили это поле.
        </span>
        <button className="popup__submit-btn" type="submit">
          Сохранить
        </button>
      </PopupWithForm>
      {/* Попап для добавления карточки */}
      <PopupWithForm
        onClose={closeAllPopups}
        name={"add"}
        isOpen={isAddPlacePopupOpen}
        title={"Новое место"}
      >
        <input
          id="title-input"
          type="text"
          placeholder="Название"
          name="name"
          className="popup__text popup__text_type_name"
          defaultValue=""
          maxLength="30"
          minLength="2"
          required
        />
        <span id="title-input_error" className="popup__error">
          Ошибка!
        </span>
        <input
          id="source-input"
          type="url"
          placeholder="Ссылка на картинку"
          name="link"
          className="popup__text popup__text_type_status"
          defaultValue=""
          required
        />
        <span id="source-input_error" className="popup__error">
          Ошибка!
        </span>
        <button className="popup__submit-btn" type="submit">
          Сохранить
        </button>
      </PopupWithForm>
      {/* попап для обновления аватарки */}
      <PopupWithForm
        onClose={closeAllPopups}
        name={"avatar"}
        isOpen={isEditAvatarPopupOpen}
        title={"Обновить аватар"}
      >
        <input
          id="avatar-input"
          type="url"
          name="avatar"
          required
          placeholder="Ссылка на картинку"
          className="popup__text popup__text_type_avatar"
        />
        <span id="avatar-input_error" className="popup__error">
          Ошибка!
        </span>
        <button
          type="submit"
          className="popup__submit-btn popup__submit-btn_avatar"
        >
          Сохранить
        </button>
      </PopupWithForm>
      <Footer />
      <div className="popup popup_type_image">
        <div className="popup__content-image">
          <button
            className="popup__close  popup__close-image"
            type="button"
          ></button>
          <img
            className="popup__photo-image"
            src="<%=require('./images/dog.avif')%>"
            alt="картинка"
          />
          <p className="popup__description-image"></p>
        </div>
      </div>
      {/* <template className="template-element">
        <div className="element">
          <img className="element__image" src="#" alt="" />
          <div className="element__info">
            <h2 className="element__title"></h2>
            <div className="element__like-row">
              <button className="element__like" type="button"></button>
              <p className="element__like-count">0</p>
            </div>
          </div>
          <button type="button" className="element__delete"></button>
        </div>
      </template> */}
    </div>
  );
}

export default App;
