import React, {useState, useEffect} from 'react';
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import Popup from './components/Popup/Popup';


function App() {

  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState();
  const [popup, setPopup] = useState(null);

  const handlePopupOpen = (cardContent) => {
    setPopupContent(cardContent);
    setPopupIsOpen(true);
  }

  const handlePopupClose = () => {
    setPopupIsOpen(false);
    setPopup(null);
  }

  useEffect(() => {
    if (popupIsOpen) {
      setPopup(
        <Popup
          content={popupContent}
          handlePopupClose={handlePopupClose}
        />
      )
    } else {
      setPopup(null);
    }
  }, [popupIsOpen, popupContent]);

  return (
    <div className="App">
      <CardContainer handlePopupOpen={handlePopupOpen} />
      {popup}
    </div>
  );
}

export default App;
