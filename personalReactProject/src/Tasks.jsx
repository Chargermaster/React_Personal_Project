import React from "react";
import RenderCards from "./RenderCards";
import { globalCardId } from "./MainBody";
import { Link } from "react-router-dom";
import Button from "@material-ui/Core/Button";

const Tasks = ({
  idTracker,
  setIdTracker,
  handleDragOver,
  handleDrop,
  cards,
  setCards,
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
          <p>Tasks</p>
          <RenderCards cards={cards} setCards={setCards} />
          <Link to="/">
            <Button variant="contained" color="primary">
              Return
            </Button>
          </Link>
        </div>
      </main>
    </globalCardId.Provider>
  );
};

export default Tasks;
