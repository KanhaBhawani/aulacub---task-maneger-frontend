import React, { useState } from "react";
import "./Card.css";

const Card = ({ data, index, updateTask, deleteTask }) => {
  const [isEditable, setisEditable] = useState("false");
  let color = "red";
  let btnColor = "green";
  const level = data?.level;
  const [selectedLevel, setSelectedLevel] = useState(data.level); // State to track the selected value

  const handleRadioChange = (event) => {
    setSelectedLevel(event.target.value); // Update the selected value state
  };

  if (level === "Easy") {
    color = "#008d15";
    btnColor = "rgb(80, 160, 78)";
  } else if (level === "Medium") {
    color = "#ffd755";
    btnColor = "rgb(215, 208, 73)";
  } else {
    color = "#b9473e";
    btnColor = "rgb(215, 75, 73)";
  }
  return (
    <div
      className="card"
      style={{ "--primary-color": color, "--btn-color": btnColor }}
    >
      <div className="card1">
        <div id={"complete-check" + index}>
          <input
            type="checkbox"
            id={"cbx" + index}
            style={{ display: "none" }}
            onChange={() => {
              const task = data;
              if (task.isCompleted === "false") {
                task.isCompleted = "true";
              } else {
                task.isCompleted = "false";
              }

              updateTask(index, task);
            }}
            checked={data.isCompleted === "true"}
          />
          <label htmlFor={"cbx" + index} className="check">
            <svg width="18px" height="18px" viewBox="0 0 18 18">
              <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
              <polyline points="1 9 7 14 15 4"></polyline>
            </svg>
          </label>
        </div>

        <div
          className="container"
          id={"level-btn" + index}
          style={{ display: "none" }}
        >
          <div className="tabs">
            {/* Use onChange event and value attribute to track the selected value */}
            <input
              type="radio"
              id={"radio-1" + index}
              name="tabs"
              value="Easy"
              onChange={handleRadioChange}
              checked={selectedLevel === "Easy"}
            />
            <label className="tab" htmlFor={"radio-1" + index}>
              Easy
            </label>
            <input
              type="radio"
              id={"radio-2" + index}
              name="tabs"
              value="Medium"
              onChange={handleRadioChange}
              checked={selectedLevel === "Medium"}
            />
            <label className="tab" htmlFor={"radio-2" + index}>
              Medium
            </label>
            <input
              type="radio"
              id={"radio-3" + index}
              name="tabs"
              value="Hard"
              onChange={handleRadioChange}
              checked={selectedLevel === "Hard"}
            />
            <label className="tab" htmlFor={"radio-3" + index}>
              Hard
            </label>
            <span className="glider"></span>
          </div>
        </div>

        <div>
          <p contentEditable={isEditable} id={"data-name" + index}>
            {data?.name}
          </p>
          <p contentEditable={isEditable} className="small" id={"data-desc" + index}>
            {data?.desc}
          </p>
          <div className="go-corner" href="#">
            <div className="go-arrow">o</div>
          </div>
        </div>
        {/* Button Group */}
        <div className="btn-group">
          <button
            id={"update-btn" + index}
            className="Btn"
            onClick={() => {
              setisEditable("true");
              document.getElementById("level-btn" + index).style.display =
                "block";
              document.getElementById("complete-check" + index).style.display =
                "none";
              document.getElementById("update-btn" + index).style.display =
                "none";
              document.getElementById("delete-btn" + index).style.display =
                "none";
              document.getElementById("save-btn" + index).style.display =
                "flex";
            }}
          >
            <div className="sign">
              <svg viewBox="0 0 32 32">
                <path d="M23.7207 8.1641c-3.7872-3.7316-9.6125-4.1499-13.8605-1.2914L9.8483 5.2317c-.002-.2762-.2276-.4985-.5039-.4963L8.3445 4.7432C8.0684 4.7453 7.8464 4.9708 7.8484 5.2468L7.876 8.9893c.0039.5498.4512.9922 1 .9922.002 0 .0049 0 .0078 0l3.743-.0276c.2762-.002.4984-.2277.4963-.5039l-.0078-1.0001c-.0021-.2761-.2276-.4981-.5036-.4961l-.6362.0046c3.3478-1.6712 7.5305-1.1391 10.341 1.6295 2.6972 2.6588 3.4342 6.6558 1.9015 10.0831-.1091.244-.0197.5283.2183.65l.8925.456c.2529.1292.5727.0251.6901-.2334C27.9255 16.3433 27.0319 11.4282 23.7207 8.1641zM23.124 22.0186c-.002 0-.0049 0-.0078 0l-3.743.0275c-.2762.0021-.4984.2277-.4963.5039l.0078 1.0001c.0021.276.2276.498.5036.4961l.6356-.0046c-3.348 1.6708-7.53 1.1382-10.3404-1.6295-2.6972-2.6588-3.4342-6.6559-1.9015-10.0831.1091-.244.0197-.5283-.2183-.65l-.8925-.456c-.2529-.1292-.5727-.0251-.6901.2334-1.9068 4.2002-1.0131 9.1153 2.298 12.3795 2.1396 2.1084 4.9307 3.1592 7.7197 3.1592 2.1475 0 4.2929-.6252 6.1407-1.869l.0119 1.6421c.002.2762.2276.4985.5039.4964l.9999-.0078c.2761-.0022.4981-.2277.4961-.5037l-.0276-3.7424C24.1201 22.4609 23.6729 22.0186 23.124 22.0186z"></path>
              </svg>
            </div>
            <div className="text">Update</div>
          </button>

          <button
            id={"delete-btn" + index}
            className="Btn"
            onClick={() => {
              deleteTask(index);
            }}
          >
            <div className="sign">
              <svg viewBox="0 0 32 32">
                <path d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"></path>
              </svg>
            </div>
            <div className="text">Delete</div>
          </button>

          <button
            id={"save-btn" + index}
            className="Btn"
            onClick={() => {
              const task_name = document.getElementById("data-name" + index).innerText;
              const task_desc = document.getElementById("data-desc" + index).innerText;

              const updatedTask = {
                name: task_name,
                desc: task_desc,
                level: selectedLevel,
                isCompleted: "false",
              };
              updateTask(index, updatedTask);
              setisEditable("false");
              document.getElementById("level-btn" + index).style.display =
                "none";
              document.getElementById("complete-check" + index).style.display =
                "block";
              document.getElementById("update-btn" + index).style.display =
                "flex";
              document.getElementById("delete-btn" + index).style.display =
                "flex";
              document.getElementById("save-btn" + index).style.display =
                "none";
            }}
            style={{ display: "none" }}
          >
            <div className="sign">
              <svg viewBox="0 0 32 32">
                <path d="m20.71 9.29-6-6a1 1 0 0 0-.32-.21A1.09 1.09 0 0 0 14 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8a1 1 0 0 0-.29-.71ZM9 5h4v2H9Zm6 14H9v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Zm4-1a1 1 0 0 1-1 1h-1v-3a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v3H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.41l4 4Z"></path>
              </svg>
            </div>
            <div className="text">Save</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
