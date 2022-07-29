import React from 'react'
import Todo from './Todo'

export default function Todolist({toggleTodo, todos}) {
  if (todos.length >= 1) {
    return (
      <div className="todolist">
        {todos.map(todo => <Todo toggleTodo={toggleTodo} todo={todo} />)}
      </div>
    )
  }
  else {
    return (
      <div className="todolist">
        <p className="notodos">No ToDos</p>
      </div>
    )
  }
}
