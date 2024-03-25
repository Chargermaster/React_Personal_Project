import React from "react";

const AddTaskButton = ({ cards, setCards }) => {
  const addCard = () => {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        name: `Test Card ${cards.length + 1}`,
      },
    ]);
  };

  return <button onClick={addCard}>AddTaskButton</button>;
};

export default AddTaskButton;
