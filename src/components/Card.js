import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const { card, onCardClick  } = props;
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `${isOwn ? 'element__delete' : ''}`;
  console.log(cardDeleteButtonClassName)
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div className="element">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-row">
          <button className="element__like" type="button"></button>
          <p className="element__like-count">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className={cardDeleteButtonClassName}></button>
    </div>
  );
}

export default Card;
