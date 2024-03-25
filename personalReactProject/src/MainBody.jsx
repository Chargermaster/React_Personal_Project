import React, { useState } from "react";
import "./MainBody.css";
import AddTaskButton from "./AddTaskButton";
import RenderCards from "./RenderCards";

const MainBody = () => {
  const [cards, setCards] = useState([]);

  return (
    <>
      <main className="MainBody">
        <div className="MainBodyDivCommon">
          Tasks
          <RenderCards cards={cards} setCards={setCards} />
          <AddTaskButton cards={cards} setCards={setCards} />
        </div>
        <div className="MainBodyDivCommon">Doing</div>
        <div className="MainBodyDivCommon">Done</div>
      </main>
    </>
  );
};

export default MainBody;
