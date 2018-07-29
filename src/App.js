import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {addTodo, generateId, findById, toogleTodo, updateTodo} from './lib/todoHelpers'
import {pipe, partial}  from './lib/utils'
import {TodoForm, TodoList} from './components/todo'


class App extends Component {

  state = {
    todos: [
      {id: 0, name: 'Learn JSX', isComplete: true},
      {id: 1, name: 'Build an awesome app', isComplete: false},
      {id: 2, name: 'Ship it!', isComplete: false}
    ],
    currentTodo: ''
  }

  handleInputChange = (event) => {
     this.setState({
       currentTodo: event.target.value
     })
  }

  handleToggle = (id) => {

    // const todo = findById(id, this.state.todos)
    // const toggled = toogleTodo(todo)
    // const updateTodos = updateTodo(this.state.todos, toggled)
    const getUpdatedTodos = pipe(findById, toogleTodo, partial(updateTodo, this.state.todos))
    const updateTodos = getUpdatedTodos(id, this.state.todos)

    this.setState({
      todos: updateTodos
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newId = generateId()
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handleEmptySubmit = (event) => {
    event.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  render() {

    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </header>

        <div className="Todo-App">

        { this.state.errorMessage && <span className="error">{this.state.errorMessage}</span> }

          <TodoForm
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
            currentTodo={this.state.currentTodo}
            />

          <TodoList
            handleToggle={this.handleToggle}
            todo={this.state.todos}
            />

        </div>

      </div>
    );
  }
}

export default App;
