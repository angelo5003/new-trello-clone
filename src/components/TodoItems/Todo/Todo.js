import React from "react";
import "./Todo.css";

const Todo = () => {
  return (
    <div className="todo-container">
      <div className="todo-title-container">
        <h2>Todo</h2>
        <form>
          <input type="text" id="new-todo-input" className="input-field" />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Todo;
