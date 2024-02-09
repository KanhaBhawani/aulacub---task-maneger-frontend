import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]); // Append new task to the tasks array
  };

  const updateTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1); // Remove the task at the specified index
    setTasks(updatedTasks); // Update the state with the new array
  };
  return (
    <div className="App">
      <div className="main-body">
        <div className="left">
          <TaskForm addTask={addTask} />
        </div>
        <div className="right">
          {tasks.map((task, index) => (
            <Card
              key={index}
              data={task}
              index={index}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
