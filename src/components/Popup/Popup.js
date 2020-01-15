import React from 'react';
import './Popup.css';
import { ReactComponent as Close } from './Close.svg';

function Popup(props) {
  const popupCloseBtn = React.createRef();
  const popupWindow = React.createRef();
  const popupContent = React.createRef();

  const popup = props.content;

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
        <div className="popup__header">
          <h2 className="popup__title">{popup.title}</h2>
          <div className="popup__header-block_right">
            <h3 className="popup__address">{popup.address}</h3>
            <p className="popup__price">{popup.price}</p>
          </div>
        </div>
        <div className="popup__img-container">
          <img src={popup.images[1]} alt="Изображение недвижимости" className="popup__img" />
          <div className="img-container__btn_left"></div>
          <div className="img-container__btn_right"></div>
        </div>
        <p className="popup__description">{popup.description}<span className="popup__seller-name">{popup.sellerName}</span></p>
      </div>
    </div>
  )
}

export default Popup;
