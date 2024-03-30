import React, { useContext } from "react";
import { globalCardId } from "./MainBody";

const AddTaskButton = ({ cards, setCards }) => {
  const { idTracker, setIdTracker } = useContext(globalCardId);

  const addCard = () => {
    const newId = idTracker + 1;
    setCards([
      ...cards,
      {
        id: newId,
        name: `${idTracker}`,
      },
    ]);

    setIdTracker((prevId) => prevId + 1);
  };

  return <button onClick={addCard}>AddTaskButton</button>;
};

export default AddTaskButton;
