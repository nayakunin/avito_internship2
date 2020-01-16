import React, { useState, useEffect } from 'react';
import './Popup.css';
import Circle from '../Circle/Circle';
import { ReactComponent as Close } from './Close.svg';
import { ReactComponent as Arrow } from './Arrow.svg';

function Popup(props) {
  const popupCloseBtn = React.createRef();
  const popupWindow = React.createRef();
  const popupContent = React.createRef();

  const popup = props.content[0];

  const [imageIndex, setImageIndex] = useState(0);
  const [imagesCount] = useState(popup.images.length);

  let circlesList = [];
  for (let i = 0; i < imagesCount; i++) {
    circlesList.push((
      <Circle
        key={i}
        id={i}
        active={imageIndex}
        setImageIndex={setImageIndex}
      />
    ))
  }

  const handleTurnLeft = (event) => {
    setImageIndex(imageIndex === 0 ? imagesCount - 1 : imageIndex - 1);
  }

  const handleTurnRight = (event) => {
    setImageIndex(imageIndex === imagesCount - 1 ? 0 : imageIndex + 1);
  }

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
          <p className="popup__description">{popup.description}</p>
          <p className="popup__seller-name">{popup.sellerName}</p>
          <p className="popup__price">{popup.price}</p>
        </div>
        <div className="popup__img-container img-container">
          <img
            src={popup.images[imageIndex]}
            alt="Изображение недвижимости"
            className="popup__img"
          />
          <Arrow
            className="img-container__btn img-container__btn_left"
            onClick={handleTurnLeft}
          />
          <Arrow
            className="img-container__btn img-container__btn_right"
            onClick={handleTurnRight}
          />
          <div className="img-container__circle-list">
            {circlesList}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup;
