import React, { useEffect } from "react";

import plus from "../images/plus.svg";

import api from "../utils/api";
import Card from "./Card";

export default function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  // получение данных пользователя
  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserAvatar(res.avatar);
        setUserDescription(res.about);
        setUserName(res.name);
      })
      .catch((err) => console.log(err));
  }, []);
  // получение картчоек
  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        return data.map((item) => ({
          name: item.name,
          link: item.link,
          likes: item.likes.length,
          id: item._id,
        }));
      })
      .then((cards) => setCards(cards))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__column">
            <img src={userAvatar} alt="аватар" className="profile__avatar" />
            <button
              type="button"
              className="profile__edit-avatar"
              onClick={props.onEditAvatar}
            ></button>
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={props.onEditProfile}
              ></button>
              <p className="profile__status">{userDescription}</p>
            </div>
          </div>
          <button
            className="profile__add-button"
            type="button"
            onClick={props.onAddPlace}
          >
            <img src={plus} alt="плюс" className="profile__plus" />
          </button>
        </section>

          <section className="elements">
            {cards.map((card) => (<Card card={card} key={card.id} onCardClick={props.onCardClick}/>))}
          </section>
      </main>
    </>
  );
}
