import React, { createContext, useContext, useState } from "react";
import "./MainBody.css";
import AddTaskButton from "./AddTaskButton";
import RenderCards from "./RenderCards";

const globalCardId = createContext(0);

const MainBody = () => {
  const [cards, setCards] = useState([]);
  const [doingCards, setDoingCards] = useState([]);
  const [doneCards, setDoneCards] = useState([]);
  const [idTracker, setIdTracker] = useState(0);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, divId) => {
    console.log(event);
    console.log(divId);
    event.preventDefault();
    const cardId = JSON.parse(event.dataTransfer.getData("text/plain"));
    let movedCard = cards.find((card) => card.id === cardId);
    if (movedCard === undefined) {
      movedCard = doingCards.find((card) => card.id === cardId);
      if (movedCard === undefined) {
        movedCard = doneCards.find((card) => card.id === cardId);
        if (divId === "doingDiv") {
          const removeFromCards = doneCards.filter(
            (card) => card.id !== cardId
          );
          setDoneCards(removeFromCards);
          setDoingCards((prevDoingCards) => [...doingCards, movedCard]);
        } else if (divId === "taskDiv") {
          const removeFromCards = doneCards.filter(
            (card) => card.id !== cardId
          );
          setDoneCards(removeFromCards);
          setCards((prevSetCards) => [...cards, movedCard]);
        }
      }
      if (divId === "doneDiv") {
        const removeFromCards = doingCards.filter((card) => card.id !== cardId);
        setDoingCards(removeFromCards);
        setDoneCards((prevDoneCards) => [...doneCards, movedCard]);
      } else if (divId === "taskDiv") {
        const removeFromCards = doingCards.filter((card) => card.id !== cardId);
        setDoingCards(removeFromCards);
        setCards((prevSetCards) => [...cards, movedCard]);
      }
    }

    if (divId === "doingDiv") {
      const removeFromCards = cards.filter((card) => card.id !== cardId);
      setCards(removeFromCards);
      setDoingCards((prevDoingCards) => [...doingCards, movedCard]);
    } else if (divId === "doneDiv") {
      const removeFromCards = cards.filter((card) => card.id !== cardId);
      setCards(removeFromCards);
      setDoneCards((prevDoneCards) => [...doneCards, movedCard]);
    }
  };

  return (
    <>
      <globalCardId.Provider value={{ idTracker, setIdTracker }}>
        <main className="MainBody">
          <div
            className="MainBodyDivCommon"
            id="taskDiv"
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, "taskDiv")}
          >
            Tasks
            <RenderCards cards={cards} setCards={setCards} />
            <AddTaskButton cards={cards} setCards={setCards} />
          </div>
          <div
            className="MainBodyDivCommon"
            id="doingDiv"
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, "doingDiv")}
          >
            Doing
            <RenderCards cards={doingCards} setCards={setDoingCards} />
          </div>
          <div
            className="MainBodyDivCommon"
            id="doneDiv"
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, "doneDiv")}
          >
            Done
            <RenderCards cards={doneCards} setCards={setDoneCards} />
          </div>
        </main>
      </globalCardId.Provider>
    </>
  );
};

export default MainBody;
export { globalCardId };
