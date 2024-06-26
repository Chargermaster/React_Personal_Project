import React, { useState } from "react";
import "./RenderCards.css";
import EditCard from "./EditCard";

const RenderCards = ({ cards, setCards }) => {
  const [showEditCard, setShowEditCard] = useState(false);
  const [currentCardId, setCurrentCardId] = useState();

  const handleCardClick = (id) => {
    setShowEditCard(true);
    setCurrentCardId(id);
  };

  const handleDragStart = (event, id) => {
    event.dataTransfer.setData("text/plain", id);
  };

  return (
    <div className="cardTopDiv">
      {cards.map((e) => (
        <div
          className="cardSharedStyle"
          onClick={() => handleCardClick(e.id)}
          key={e.id}
          draggable
          onDragStart={(event) => handleDragStart(event, e.id)}
        >
          <div>
            <div>{e.name}</div>
          </div>
        </div>
      ))}
      {showEditCard && (
        <EditCard
          showEditCard={showEditCard}
          setShowEditCard={setShowEditCard}
          cards={cards}
          setCards={setCards}
          currentCardId={currentCardId}
        />
      )}
    </div>
  );
};

export default RenderCards;
