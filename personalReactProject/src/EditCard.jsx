import { React, useState } from "react";
import "./EditCard.css";

const EditCard = ({
  showEditCard,
  setShowEditCard,
  cards,
  setCards,
  currentCardId,
}) => {
  const handleCardInfoBox = (e) => {
    if (e.target.className === "EditCardBackground") {
      setShowEditCard(!showEditCard);
    }
  };

  const handleDelteCard = () => {
    const newCardsArray = cards.filter((card) => card.id !== currentCardId);
    const updateNewCardsArrayIds = newCardsArray.map((card, index) => ({
      ...card,
      id: index + 1,
    }));
    setShowEditCard(!showEditCard);
    setCards(updateNewCardsArrayIds);
  };
  return (
    <>
      {showEditCard && (
        <div className="EditCardBackground" onClick={handleCardInfoBox}>
          <div className="EditCardInfoBox">
            <h1>wat</h1>
            <button onClick={handleDelteCard}>Delete</button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditCard;
