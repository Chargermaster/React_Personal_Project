import React from "react";
import RenderCards from "./RenderCards";
import AddTaskButton from "./AddTaskButton";
import { globalCardId } from "./MainBody";
import { Link } from "react-router-dom";

const Doing = ({
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
          id="doingDiv"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, "doingDiv")}
        >
          Doing
          <RenderCards cards={doingCards} setCards={setDoingCards} />
        </div>
      </main>
    </globalCardId.Provider>
  );
};

export default Doing;
