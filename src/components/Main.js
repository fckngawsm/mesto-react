import React from "react";

import avatar from "../images/avatar.png";
import plus from "../images/plus.svg";


// let isEditAvatarPopupOpen = false;

// function handleEditAvatarClick(){
//   isEditAvatarPopupOpen = !isEditAvatarPopupOpen;
// }

// export  function handleEditProfileClick(){
//   console.log('клик!')
// }

// function handleAddPlaceClick(popup){

// }

// export function handleEditProfileClick(){
//   const [isOpen, setIsOpen] = useState(false);
//   onclick
// }

// тут должно быть то что в слаке переделать под себя

export default function Main(){
    return(
        <main className="main">
        <section className="profile">
          <div className="profile__column">
            <img src={avatar} alt="аватар" className="profile__avatar" />
            <button type="button" className="profile__edit-avatar"></button>
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button className="profile__edit-button" type="button"></button>
              <p className="profile__status">Исследователь океана</p>
            </div>
          </div>
          <button className="profile__add-button" type="button">
            <img src={plus} alt="плюс" className="profile__plus" />
          </button>
        </section>
        <section className="elements"></section>
      </main>
    )
}
