import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./MainBody.css";
import MainContent from "./MainContent";

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
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainContent
              idTracker={idTracker}
              setIdTracker={setIdTracker}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
              cards={cards}
              setCards={setCards}
              doingCards={doingCards}
              setDoingCards={setDoingCards}
              doneCards={doneCards}
              setDoneCards={setDoneCards}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default MainBody;
export { globalCardId };
