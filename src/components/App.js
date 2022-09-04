import React, { useState } from "react";

import "../index.css";
import api from "../utils/api";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import PopupWithForm from "../components/PopupWithForm";
import ImagePopup from "./ImagePopup";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        return data.map((item) => ({
          name: item.name,
          link: item.link,
          likes: item.likes.length,
          id: item._id,
          owner:item.owner
        }));
      })
      .then((cards) => setCards(cards))
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  // state
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  //
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  //
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  //
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  // редактирование профиля
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  // добавление новой карточки
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  // изменение аватарки
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  // закрытие попапов
  function closeAllPopups() {
    setIsImagePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }
  // чтобы не схлопаывалась картинка!
  React.useEffect(() => {
    if (!isImagePopupOpen) {
      setTimeout(() => {
        setSelectedCard(null);
      }, 400);
    }
  }, [isImagePopupOpen]);

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
        />
        {/* попап редактирования профиля */}
        <PopupWithForm
          onClose={closeAllPopups}
          name={"profile"}
          isOpen={isEditProfilePopupOpen}
          title={"Редактировать профиль"}
          buttonText={"Сохранить"}
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
        </PopupWithForm>
        {/* Попап для добавления карточки */}
        <PopupWithForm
          onClose={closeAllPopups}
          name={"add"}
          isOpen={isAddPlacePopupOpen}
          title={"Новое место"}
          buttonText={"Сохранить"}
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
        </PopupWithForm>
        {/* попап для обновления аватарки */}
        <PopupWithForm
          onClose={closeAllPopups}
          name={"avatar"}
          isOpen={isEditAvatarPopupOpen}
          title={"Обновить аватар"}
          buttonText={"Сохранить"}
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
        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
