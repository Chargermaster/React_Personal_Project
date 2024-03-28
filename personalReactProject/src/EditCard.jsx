import { React, useState } from "react";
import "./EditCard.css";

const EditCard = ({
  showEditCard,
  setShowEditCard,
  cards,
  setCards,
  currentCardId,
}) => {
  const [editCardName, setEditedCardName] = useState(
    cards[currentCardId - 1].name
  );

  const handleCardInfoBox = (e) => {
    if (e.target.className === "EditCardBackground") {
      setShowEditCard(!showEditCard);
    }
  };

  const handleDeleteCard = () => {
    const newCardsArray = cards.filter((card) => card.id !== currentCardId);
    const updateNewCardsArrayIds = newCardsArray.map((card, index) => ({
      ...card,
      id: index + 1,
    }));
    setShowEditCard(!showEditCard);
    setCards(updateNewCardsArrayIds);
  };

  const handleCardNameChange = (e) => {
    setEditedCardName(e.target.value);
    const updatedCards = cards.map((card) =>
      card.id === currentCardId ? { ...card, name: e.target.value } : card
    );
    setCards(updatedCards);
  };

  return (
    <>
      {showEditCard && (
        <div className="EditCardBackground" onClick={handleCardInfoBox}>
          <div className="EditCardInfoBox">
            <input
              type="text"
              value={editCardName}
              onChange={handleCardNameChange}
            ></input>
            <button onClick={handleDeleteCard}>Delete</button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditCard;
