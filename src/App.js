import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {addTodo, generateId} from './lib/todoHelpers'

import {TodoForm, TodoList} from './components/todo'


class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: [
        {id: 0, name: 'Learn JSX', isComplete: true},
        {id: 1, name: 'Build an awesome app', isComplete: false},
        {id: 2, name: 'Ship it!', isComplete: false}
      ],
      currentTodo: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
     this.setState({
       currentTodo: event.target.value
     })
  }

  handleSubmit(event) {
    event.preventDefault()
    const newId = generateId()
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
    const updatedTodos = addTodo(this.state.todo, newTodo)
    this.setState({
      todo: updatedTodos,
      currentTodo: ''
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </header>

        <div className="Todo-App">

          <TodoForm
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            currentTodo={this.state.currentTodo}
            />

          <TodoList
            todo={this.state.todo}
            />

        </div>

      </div>
    );
  }
}

export default App;
