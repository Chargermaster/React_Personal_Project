import React, { createContext, useContext, useState } from "react";
import "./MainBody.css";
import AddTaskButton from "./AddTaskButton";
import RenderCards from "./RenderCards";

const globalCardId = createContext(0);

const MainBody = () => {
  const [cards, setCards] = useState([]);
  const [doingCards, setDoingCards] = useState([]);
  const [idTracker, setIdTracker] = useState(0);

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
      <globalCardId.Provider value={{ idTracker, setIdTracker }}>
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
      </globalCardId.Provider>
    </>
  );
};

export default MainBody;
export { globalCardId };
