import React from 'react';
import './Card.css';

function Card(props) {

  const handleClick = (event) => {
    fetch(`http://134.209.138.34/item/${props.id}`)
      .then((response) => response.json())
      .then((cardContent) => {
        props.handlePopupOpen(cardContent);
      })
  }

  return (
    <div className="card" onClick={handleClick}>
      <div className="card__image-placeholder">
        <img src={props.url} alt="Изображение недвижимости" className="card__img"/>
      </div>
      <h2 className="card__title">{props.title}</h2>
      <p className="card__address">{props.address}</p>
      <h3 className="card__price">{props.price}</h3>
    </div>
  )
}

export default Card;
