import React, { useState } from "react";

const Task = ({ text, handleAddTask, handleDeleteTask, id }) => {
  const [title, setTitle] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>{text}</h3>
        <input type="text" value={title} onChange={handleTitle} />
        <button>Add new Task</button>
      </form>
      <button onClick={() => handleDeleteTask(id)}>Delete Task</button>
    </div>
  );
};

export default Task;
