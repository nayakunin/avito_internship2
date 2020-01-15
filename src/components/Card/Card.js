import React, {useState, useEffect} from 'react';
import './Card.css';
import Popup from '../Popup/Popup';

function Card(props) {
  const [isOpen, setIsOpem] = useState(false);
  
  useEffect(() => {

  }, [isOpen])

  return (
    <div className="card" onClick={isOpen}>
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
