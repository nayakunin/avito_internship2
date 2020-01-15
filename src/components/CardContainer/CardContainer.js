import React, {useState, useEffect} from "react";
import './CardContainer.css';
import Card from '../Card/Card';

function CardContainer() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://134.209.138.34/items')
      .then((response) => response.json())
      .then((data) => data.map((elem) => {
        return (
          <Card
            key={elem.id}
            url={elem.previewImage}
            address={elem.address}
            title={elem.title}
            price={elem.price}
          />
        );
      }))
      .then((result) => setCards(result))
      .catch((err) => new Error(err))
  }, [])


  return (
    <div className="card-conrainer">
      {cards}
    </div>
  )
}

export default CardContainer;
