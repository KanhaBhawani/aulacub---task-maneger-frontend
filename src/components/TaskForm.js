import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ addTask, sortTasks }) => {
  const [level, setLevel] = useState("Easy");

  const submitHandler = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const task = {
      name: event.target.elements["task-name"].value,
      desc: event.target.elements["text-description"].value,
      level: level,
      isCompleted: "false",
    };

    addTask(task);
  };

  return (
    <div className="task-form">
      <div className="form-container">
        <p className="heading">Create New Task</p>
        <form className="form" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="task-name">Task Name</label>
            <input type="text" id="task-name" name="task-name" required />
          </div>
          <div className="form-group">
            <label htmlFor="text-description">Task Description</label>
            <textarea
              name="text-description"
              id="text-description"
              rows="10"
              cols="50"
              required=""
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="priority-level">Priority level</label>
          </div>
          <div className="container">
            <form
              onChange={(e) => {
                setLevel(e.target.value);
              }}
            >
              <label>
                <input type="radio" name="radio" value="Easy" />
                <span>Easy</span>
              </label>
              <label>
                <input type="radio" name="radio" value="Medium" />
                <span>Medium</span>
              </label>
              <label>
                <input type="radio" name="radio" value="Hard" />
                <span>Hard</span>
              </label>
            </form>
          </div>

          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
        <button
          className="form-submit-btn"
          onClick={() => {
            sortTasks();
          }}
        >
          Sort Tasks
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
