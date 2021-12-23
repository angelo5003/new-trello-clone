import React from "react";
import Task from "../Task/Task";

const TodoList = ({ addTask, handleAddInput }) => {
  return (
    <>
      <button onClick={handleAddInput}>Add new Task</button>
      <div>
        {addTask.map((task) => {
          return <Task key={task.id} />;
        })}
      </div>
    </>
  );
};

export default TodoList;
