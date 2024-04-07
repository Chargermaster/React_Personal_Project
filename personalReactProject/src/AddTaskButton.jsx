import React, { useContext } from "react";
import { globalCardId } from "./MainBody";
import Button from "@material-ui/Core/Button";

const AddTaskButton = ({ cards, setCards }) => {
  const { idTracker, setIdTracker } = useContext(globalCardId);

  const addCard = () => {
    const newId = idTracker + 1;
    setCards([
      ...cards,
      {
        id: newId,
        name: `Click to edit`,
        content: "Content",
      },
    ]);

    setIdTracker((prevId) => prevId + 1);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={addCard}>
        Add Task
      </Button>
    </>
  );
};

export default AddTaskButton;
