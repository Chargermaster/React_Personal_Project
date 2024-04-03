import React from "react";
import RenderCards from "./RenderCards";
import AddTaskButton from "./AddTaskButton";
import { globalCardId } from "./MainBody";

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
  );
};

export default MainContent;
