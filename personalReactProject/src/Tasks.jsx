import React from "react";
import RenderCards from "./RenderCards";
import AddTaskButton from "./AddTaskButton";
import { globalCardId } from "./MainBody";
import { Link } from "react-router-dom";

const Tasks = ({
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
          TASKS MY GUY
          <RenderCards cards={cards} setCards={setCards} />
        </div>
      </main>
    </globalCardId.Provider>
  );
};

export default Tasks;
