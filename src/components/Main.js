import React from "react";

import avatar from "../images/avatar.png";
import plus from "../images/plus.svg";

export default function Main(props){
    return(
        <main className="main">
        <section className="profile">
          <div className="profile__column">
            <img src={avatar} alt="аватар" className="profile__avatar"/>
            <button type="button" className="profile__edit-avatar" onClick = {props.onEditAvatar}></button>
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button className="profile__edit-button" type="button" onClick = {props.onEditProfile}></button>
              <p className="profile__status">Исследователь океана</p>
            </div>
          </div>
          <button className="profile__add-button" type="button" onClick = {props.onAddPlace}>
            <img src={plus} alt="плюс" className="profile__plus" />
          </button>
        </section>
        <section className="elements"></section>
      </main>
    )
}
