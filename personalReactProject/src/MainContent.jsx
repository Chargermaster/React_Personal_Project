import React from "react";
import RenderCards from "./RenderCards";
import AddTaskButton from "./AddTaskButton";
import { globalCardId } from "./MainBody";
import { Link } from "react-router-dom";

const MainContent = ({
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
          id="taskDiv"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, "taskDiv")}
        >
          <Link to="/Tasks">Tasks</Link>
          <RenderCards cards={cards} setCards={setCards} />
          <AddTaskButton cards={cards} setCards={setCards} />
        </div>
        <div
          className="MainBodyDivCommon"
          id="doingDiv"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, "doingDiv")}
        >
          <Link to="/Doing">Doing</Link>
          <RenderCards cards={doingCards} setCards={setDoingCards} />
        </div>
        <div
          className="MainBodyDivCommon"
          id="doneDiv"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, "doneDiv")}
        >
          <Link to="/Done">Done</Link>
          <RenderCards cards={doneCards} setCards={setDoneCards} />
        </div>
      </main>
    </globalCardId.Provider>
  );
};

export default MainContent;
