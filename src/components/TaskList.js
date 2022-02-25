import React from "react";

const TaskList = ({ taskList, deleteTask }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div key={task.id}>
          <h2>{task.text}</h2>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
