import React from "react";

function Card({card}) {
  const { name, link, likes } = card;
  return (
    <div className="element">
      <img className="element__image" src={link} alt={name} />
      <div className="element__info">
        <h2 className="element__title">{name}</h2>
        <div className="element__like-row">
          <button className="element__like" type="button"></button>
          <p className="element__like-count">{likes}</p>
        </div>
      </div>
      <button type="button" className="element__delete"></button>
    </div>
  );
}

export default Card;
