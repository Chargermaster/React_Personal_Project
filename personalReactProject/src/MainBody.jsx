import React, { useState } from "react";
import "./MainBody.css";
import AddTaskButton from "./AddTaskButton";
import RenderCards from "./RenderCards";

const MainBody = () => {
  const [cards, setCards] = useState([]);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData("text/plain");
    const cardIndex = cards.findIndex((card) => card.id === cardId);
    if (cardIndex !== -1) {
      console.log("Enter?");
      const newCards = [...cards];
      const removedCard = newCards.splice(cardIndex, 1)[0];
      setCards(newCards);
    }
  };

  return (
    <>
      <main className="MainBody">
        <div
          className="MainBodyDivCommon"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          Tasks
          <RenderCards cards={cards} setCards={setCards} />
          <AddTaskButton cards={cards} setCards={setCards} />
        </div>
        <div
          className="MainBodyDivCommon"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          Doing
        </div>
        <div className="MainBodyDivCommon">Done</div>
      </main>
    </>
  );
};

export default MainBody;
