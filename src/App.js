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

  const handleAddInput = () => {
    const newTask = {
      id: Date.now().toString(),
      text: "Test Text",
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <Header />
      <TodoList addTask={tasks} handleAddInput={handleAddInput} />
    </div>
  );
}

export default App;
