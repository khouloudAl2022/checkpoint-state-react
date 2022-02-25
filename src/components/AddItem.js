import React from "react";

const AddItem = () => {
  return (
    <div className="add">
      <center>
        {" "}
        <h1 style={{ color: "white" }}>My To Do list </h1>
        <input type="text" placeholder="Add To Do ..." />
        <button>Delete</button>
      </center>
    </div>
  );
};

export default AddItem;
