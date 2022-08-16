import React from "react";

import "../index.css";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import PopupWithForm from "../components/PopupWithForm";

// import {handleEditProfileClick} from "../components/Main";


let isEditAvatarPopupOpen = false;

function handleEditAvatarClick(){
  isEditAvatarPopupOpen = !isEditAvatarPopupOpen;
}

export  function handleEditProfileClick(){
  console.log('клик!')
}

function handleAddPlaceClick(popup){

}

export function handleEditProfileClick(){
  const [isOpen, setIsOpen] = useState(false);
  onclick
}

function App() {
  return (
    <div className="page">
      <Header/>
      <Main/>
      <Footer/>
      <PopupWithForm title = ""  name = " " />
      {/* <div className="popup popup_type_profile">
        <div className="popup__content">
          <button
            className="popup__close popup__close-edit"
            type="button"
          ></button>
          <form
            className="popup__form popup__form-edit"
            name="form-edit"
            noValidate
          >
            <fieldset className="popup__information">
              <h2 className="popup__title">Редактировать профиль</h2>
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
            </fieldset>
          </form>
        </div>
      </div> */}
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
      {/* <div className="popup popup_type_add">
        <div className="popup__content">
          <button
            className="popup__close popup__close-add"
            type="button"
          ></button>
          <form
            className="popup__form popup__form-add"
            name="form-edit"
            noValidate
          >
            <fieldset className="popup__information">
              <h2 className="popup__title">Новое место</h2>
              <input
                id="title-input"
                type="text"
                placeholder="Название"
                name="name"
                className="popup__text popup__text_type_name"
                value=""
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
                value=""
                required
              />
              <span id="source-input_error" className="popup__error">
                Ошибка!
              </span>
              <button className="popup__submit-btn" type="submit">
                Сохранить
              </button>
            </fieldset>
          </form>
        </div>
      </div>
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
      <div className="popup popup_type_avatar">
        <div className="popup__content popup__content_avatar">
          <button
            type="button"
            className="popup__close popup__close-avatar"
          ></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            className="popup__form popup__form-avatar"
            name="form-edit"
            noValidate
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
          </form>
        </div>
      </div>
      <div className="popup popup_type_delete">
        <div className="popup__content">
          <button
            type="button"
            className="popup__close popup__close-delete"
          ></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form name="form-edit" className="popup__form popup__form-delete">
            <button
              type="submit"
              className="popup__submit-btn popup__submit-btn_delete"
            >
              Да
            </button>
          </form>
        </div>
      </div> */}

      <template className="template-element">
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
      </template>
    </div>
  );
}

export default App;
