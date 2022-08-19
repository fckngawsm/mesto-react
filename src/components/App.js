import React, { useState } from "react";

import "../index.css";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import PopupWithForm from "../components/PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  // редактирование профиля
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
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
    setIsImagePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
    console.log("popup is closed!");
  }
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setIsImagePopupOpen(true)
    setSelectedCard(card);
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
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
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        isOpen={isImagePopupOpen}
      />
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
    </div>
  );
}

export default App;
