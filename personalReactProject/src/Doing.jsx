import React from "react";
import RenderCards from "./RenderCards";
import { globalCardId } from "./MainBody";
import { Link } from "react-router-dom";
import Button from "@material-ui/Core/Button";

const Doing = ({
  idTracker,
  setIdTracker,
  handleDragOver,
  handleDrop,
  doingCards,
  setDoingCards,
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
          <p>Doing</p>
          <RenderCards cards={doingCards} setCards={setDoingCards} />

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

export default Doing;
