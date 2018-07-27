import React from 'react'
import PropTypes from 'prop-types'
import {TodoItem} from './TodoItem'

export const TodoList = (props) => {
  return(
    <div className="Todo-List">
      <ul>
        {props.todo.map(todo => <TodoItem key={todo.id} {...todo} />)}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todo: PropTypes.array.isRequired
}