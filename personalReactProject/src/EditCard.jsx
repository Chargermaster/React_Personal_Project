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
    cards.find((card) => card.id === currentCardId)?.name || null
  );
  const [editCardContent, setEditedCardContent] = useState(
    cards.find((card) => card.id === currentCardId)?.content || null
  );

  const handleCardInfoBox = (e) => {
    if (e.target.className === "EditCardBackground") {
      setShowEditCard(!showEditCard);
    }
  };

  const handleDeleteCard = () => {
    const newCardsArray = cards.filter((card) => card.id !== currentCardId);
    setShowEditCard(!showEditCard);
    setCards(newCardsArray);
  };

  const handleCardNameChange = (e) => {
    setEditedCardName(e.target.value);
    const updatedCards = cards.map((card) =>
      card.id === currentCardId ? { ...card, name: e.target.value } : card
    );
    setCards(updatedCards);
  };

  const handleCardContentChange = (e) => {
    setEditedCardContent(e.target.value);
    const updatedCards = cards.map((card) =>
      card.id === currentCardId ? { ...card, content: e.target.value } : card
    );
    setCards(updatedCards);
  };

  return (
    <>
      {showEditCard && (
        <div className="EditCardBackground" onClick={handleCardInfoBox}>
          <div className="EditCardInfoBox">
            <input
              className="editCardName"
              type="text"
              value={editCardName}
              onChange={handleCardNameChange}
            ></input>
            <textarea
              className="editCardContent"
              type="text"
              value={editCardContent}
              onChange={handleCardContentChange}
            />
            <button onClick={handleDeleteCard}>Delete</button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditCard;
