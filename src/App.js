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
    setTasks([...tasks, task]);
  };

  const updateTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const sortTasks = () => {
    const sortedTasks = [...tasks].sort((task1, task2) => {
      if (task1.isCompleted !== task2.isCompleted) {
        return task1.isCompleted === "true" ? -1 : 1;
      }
  
      const levelOrder = { "Easy": 1, "Medium": 2, "Hard": 3 };
      return levelOrder[task1.level] - levelOrder[task2.level];
    });
  
    setTasks(sortedTasks);
  };
  return (
    <div className="App">
      <div className="main-body">
        <div className="left">
          <TaskForm addTask={addTask} sortTasks={sortTasks}/>
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
