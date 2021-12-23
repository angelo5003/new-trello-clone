import React, { useState } from "react";

import Header from "./components/Header/Header";
import TodoList from "./components/TodoItems/TodoList/TodoList";

const newInput = [
  {
    id: 1,
    text: "this is the input",
  },
];

function App() {
  const [addTask, setAddTask] = useState(newInput);

  const handleAddInput = () => {
    const newTask = {
      id: Date.now().toString(),
      text: "Test Text",
    };

    setAddTask([...addTask, newTask]);
  };

  return (
    <div>
      <Header />
      <TodoList addTask={addTask} handleAddInput={handleAddInput} />
    </div>
  );
}

export default App;
