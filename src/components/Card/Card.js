import React from 'react';
import './Card.css';
import { ReactComponent as OpenMenu } from './open-menu.svg';

function Card(props) {

  const handleClick = (event) => {
    fetch(`http://134.209.138.34/item/${props.id}`)
      .then((response) => response.json())
      .then((cardContent) => {
        props.handlePopupOpen(cardContent);
      })
  }

  return (
    <div className="card" >
      <div className="card__image-placeholder card__block_left" onClick={handleClick}>
        <img src={props.url} alt="Изображение недвижимости" className="card__img"/>
      </div>
      <div className="card__block_right">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__address">{props.address}</p>
        <h3 className="card__price">{props.price}</h3>
        <OpenMenu className="card__open-menu" onClick={handleClick}/>
      </div>
    </div>
  )
}

export default Card;
