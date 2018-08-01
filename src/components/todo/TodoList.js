import React from 'react'
import PropTypes from 'prop-types'
import {TodoItem} from './TodoItem'

export const TodoList = (props) => {
  return(
    <div className="Todo-List">
      <ul>
        {props.todo.map(todo => <TodoItem handleToggle={props.handleToggle} key={todo.id} {...todo} handleRemove={props.handleRemove} />)}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todo: PropTypes.array.isRequired
}
