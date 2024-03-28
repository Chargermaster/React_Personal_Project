import React, { useState } from "react";
import "./MainBody.css";
import AddTaskButton from "./AddTaskButton";
import RenderCards from "./RenderCards";

const MainBody = () => {
  const [cards, setCards] = useState([]);
  const [doingCards, setDoingCards] = useState([]);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const cardId = JSON.parse(event.dataTransfer.getData("text/plain"));
    const movedCard = cards.find((card) => card.id === cardId);
    const removeFromCards = cards.filter((card) => card.id !== cardId);
    setCards(removeFromCards);
    setDoingCards((prevDoingCards) => [...doingCards, movedCard]);
    console.log(doingCards);
    console.log(cards);
  };

  return (
    <>
      <main className="MainBody">
        <div className="MainBodyDivCommon">
          Tasks
          <RenderCards cards={cards} setCards={setCards} />
          <AddTaskButton cards={cards} setCards={setCards} />
        </div>
        <div
          className="MainBodyDivCommon"
          id="doingDiv"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          Doing
          <RenderCards cards={doingCards} setCards={setDoingCards} />
        </div>
        <div className="MainBodyDivCommon">Done</div>
      </main>
    </>
  );
};

export default MainBody;
