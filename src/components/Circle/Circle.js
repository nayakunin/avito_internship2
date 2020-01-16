import React from "react";
import './Circle.css';

function Circle(props) {
  const handleClick = (event) => {
    props.setImageIndex(props.id);
  }

  return (
    <div className="circle" onClick={handleClick}>
      {props.id === props.active ? <div className="circle__inner"></div> : null }
    </div>
  )
}

export default Circle;
