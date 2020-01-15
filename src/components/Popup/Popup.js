import React from 'react';
import './Popup.css';

function Popup(props) {
  const popup = props.content;

  return (
    <div className="popup">
      <div className="popup__header">
        <h2 className="popup__title">{popup.title}</h2>
        <div className="popup__header-block_right">
          <h3 className="popup__address">{popup.address}</h3>
          <p className="popup__price">{popup.price}</p>
        </div>
      </div>
      <div className="popup__img-container">
        <img src={popup.images[1]} alt="Изображение недвижимости" className="popup__img"/>
      </div>
      <p className="popup__description">{popup.description}<span className="popup__seller-name">{popup.sellerName}</span></p>
    </div>
  )
}

export default Popup;

