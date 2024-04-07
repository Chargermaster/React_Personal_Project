import React from "react";
import RenderCards from "./RenderCards";
import { globalCardId } from "./MainBody";
import { Link } from "react-router-dom";
import Button from "@material-ui/Core/Button";

const Done = ({
  idTracker,
  setIdTracker,
  handleDragOver,
  handleDrop,
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
          <p>Done</p>
          <RenderCards cards={doneCards} setCards={setDoneCards} />

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

export default Done;
