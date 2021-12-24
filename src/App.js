import React, { useState } from "react";

import Header from "./components/Header/Header";
import TodoList from "./components/TodoItems/TodoList/TodoList";

const initialTasks = [
  {
    id: 1,
    text: "this is the input",
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddNewColumn = () => {
    const newColumn = {
      id: Date.now().toString(),
      text: "Test Text",
    };

    setTasks([...tasks, newColumn]);
  };

  const handleAddTask = (task) => {
    const newTask = {
      id: Date.now().toString(),
      task: task,
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Header />
      <TodoList
        addTask={tasks}
        handleAddNewColumn={handleAddNewColumn}
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
