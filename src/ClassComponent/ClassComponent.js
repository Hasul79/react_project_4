import "./ClassComponent.css";
import React, { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
         todos: [ ],
         value: "",
        editing: false,
        currentid: "",
      currentValue: "",
    };
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
    };
     

  onAddTask = (e) => {
    e.preventDefault();

    const obj = {
      name: this.state.value,
      id: Date.now(),
    };
    if (this.state.value !== "") {
      this.setState({ todos: this.state.todos.concat(obj) });
      this.setState({ value: "" });
    }
  };

  onDeleteTask = (itemId) => {
    this.setState({
      todos: [...this.state.todos].filter((id) => id.id !== itemId),
    });
  };

  onEditTodo = (id, newValue) => {
    this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.name = newValue;
      }
    });
  };

  onSubmitEditTodo = (e) => {
    e.preventDefault();

    this.onEditTodo(this.state.currentid, this.state.currentValue);
    this.setState({ editing: false });
  };

  onToggleEdit = (todo) => {
    this.setState({ editing: true });
    this.setState({ currentid: todo.id });
    this.setState({ currentValue: todo.name });
  };

  onEditInputChange = (e) => {
    this.setState({ currentValue: e.target.value });
  };

  render() {
    const mylist = this.state.todos.map((todo) => (
      <li className="todo_item">
        {todo.name}

        <button onClick={() => this.onToggleEdit(todo)}>Edit</button>
        <button onClick={() => this.onDeleteTask(todo.id)}>Delete</button>
      </li>
    ));

    return (
       <div className="wrap">
        <button className="bten">Class Component</button>
        <div className="App">
          {this.state.editing === false ? (
            
            <form onSubmit={this.onAddTask}>
              <input className="input"
                placeholder="type your task"
                value={this.state.value}
                onChange={this.onChange}
              />
              <button className="input" onClick={this.onAddTask}>Add </button>
            </form>
          ) : (
            <form onSubmit={this.onSubmitEditTodo}>
              <input className="input"
                placeholder="edit your task"
                value={this.state.currentValue}
                name={this.state.currentValue}
                onChange={this.onEditInputChange}
              />
              <button className="input" onClick={this.onSubmitEditTodo}>Edit Item</button>
            </form>
          )}

          <ul className="todo_wrapper">{mylist}</ul>
        </div>
      </div>
    );
  }
}

export default ClassComponent;