import React from "react";
import Task from "../Task/Task";

const TodoList = ({
  addTask,
  handleAddNewColumn,
  handleAddTask,
  handleDeleteTask,
}) => {
  return (
    <>
      <button onClick={handleAddNewColumn}>Add new Column</button>
      <div>
        {addTask.map((task) => {
          return (
            <Task
              key={task.id}
              text={task.text}
              id={task.id}
              handleAddTask={handleAddTask}
              handleDeleteTask={handleDeleteTask}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
