import React from "react";
import RenderCards from "./RenderCards";
import AddTaskButton from "./AddTaskButton";
import { globalCardId } from "./MainBody";
import { Link } from "react-router-dom";

const Done = ({
  idTracker,
  setIdTracker,
  handleDragOver,
  handleDrop,
  cards,
  setCards,
  doingCards,
  setDoingCards,
  doneCards,
  setDoneCards,
}) => {
  return (
    <globalCardId.Provider value={{ idTracker, setIdTracker }}>
      <main className="MainBody">
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
  );
};

export default Done;
