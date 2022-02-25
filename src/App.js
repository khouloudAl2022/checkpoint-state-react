import { Component } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import TaskList from "./components/TaskList";
class App extends Component {
  state = {
    taskList: [
      { id: Math.random(), text: "task1" },
      { id: Math.random(), text: "task2" },
      { id: Math.random(), text: "task3" },
    ],
  };
  addTask = (text) => {
    this.setState({
      taskList: [...this.state.taskList, { id: Math.random(), text: text }],
    });
  };
  deleteTask = (id) => {
    this.setState({
      taskList: this.state.taskList.filter((task) => task.id !== id),
    });
  };
  render() {
    return (
      <div>
        <AddItem addTask={this.addTask} />
        <h1 style={{ textAlign: "center" }}>List of Items</h1>
        <TaskList taskList={this.state.taskList} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
