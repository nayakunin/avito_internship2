import React from 'react';
import './Popup.css';
import { ReactComponent as Close } from './Close.svg';
import { ReactComponent as Arrow } from './Arrow.svg';

function Popup(props) {
  const popupCloseBtn = React.createRef();
  const popupWindow = React.createRef();
  const popupContent = React.createRef();

  const popup = props.content[0];

  const handleClose = (event) => {
    const target = event.target;
    if (
      (target === popupWindow.current && target !== popupContent.current) ||
      (target === popupCloseBtn.current)
    ) {
      props.handlePopupClose();
    }
  }

  return (
    <div className="popup" onClick={handleClose} ref={popupWindow}>
      <div className="popup__content" ref={popupContent}>
        <Close className="popup__close-btn" onClick={handleClose} ref={popupCloseBtn} />
        <div className="popup__text">
          <h2 className="popup__title">{popup.title}</h2>
          <h3 className="popup__address">{popup.address}</h3>
          <p className="popup__price">{popup.price}</p>
          <p className="popup__description">{popup.description}</p>
          <p className="popup__seller-name">{popup.sellerName}</p>
        </div>
        <div className="popup__img-container">
          <img src={popup.images[0]} alt="Изображение недвижимости" className="popup__img" />
          <Arrow className="img-container__btn img-container__btn_left"/>
          <Arrow className="img-container__btn img-container__btn_right"/>
        </div>
      </div>
    </div>
  )
}

export default Popup;
