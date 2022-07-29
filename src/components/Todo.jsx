import React from 'react'

export default function Todo({toggleTodo, todo}) {

  function handleToggle() {
    toggleTodo(todo.id)
  }

  return (
    <label id={todo.id} className="todo">
        <input type="checkbox" className="checkbox" checked={todo.completed} onChange={handleToggle}/>
        <p className="todotxt">{todo.text}</p>
    </label>
  )
}
