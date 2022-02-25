import React from "react";

const TaskList = ({ taskList, deleteTask }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div
          key={task.id}
          style={{
            display: "flex",
            backgroundColor: "#e7e7e7",
            margin: "1%",
            padding: "0%",

            width: "100%",
          }}
        >
          <h2 style={{ padding: "1%", width: "100%" }}>{task.text}</h2>
          <button
            onClick={() => deleteTask(task.id)}
            style={{ padding: " 3%", border: "none" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
