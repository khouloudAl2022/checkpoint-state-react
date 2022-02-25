import React, { Component } from "react";
import "../App.css";
class AddItem extends Component {
  state = { text: "" };
  handleText = (event) => {
    this.setState({ text: event.target.value });
    console.log(this.text);
  };
  handleAdd = () => {
    this.props.addTask(this.state.text);
  };

  render() {
    return (
      <div className="add">
        <center>
          {" "}
          <h1 style={{ color: "white" }}>My To Do list </h1>
          <input
            type="text"
            placeholder="Add To Do ..."
            onChange={this.handleText}
          />
          <button onClick={this.handleAdd} style={{ padding: " 14px 40px" }}>
            Add
          </button>
        </center>
      </div>
    );
  }
}
export default AddItem;
