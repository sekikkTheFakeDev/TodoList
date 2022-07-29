import React, {useState, useRef, useEffect} from 'react'
import Todolist from './components/Todolist'
import {FaPlus} from 'react-icons/fa'
import {AiFillDelete} from 'react-icons/ai'
import { v4 as uuidv4 } from "uuid";

import './sass/styles.scss'

function App() {

  const [todos, setTodos] = useState([])

  const txtref = useRef()

  function create() {
    const value = txtref.current.value
    if (value === "") return

    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), text: value, completed: false}]
    })

    txtref.current.value = ""
  }

  useEffect(() => {
    let newTodos = JSON.parse(localStorage.getItem("todoapp.todos"))
    setTodos(prevTodos => {
      return newTodos
    })
  }, [])

  useEffect(() => {
    localStorage.setItem("todoapp.todos", JSON.stringify(todos))
  }, [todos])

  function toggleTodo (id) {
    const newTodos = [...todos]
    let item = newTodos.find(todo => todo.id === id)
    item.completed = !item.completed
    setTodos(newTodos)
  }

  function delCompleted() {
    let newTodos = [...todos].filter(todo => todo.completed === false)
    setTodos(newTodos)
  }
  

  return (
    <div className="holder">
      <div className="inputs">
        <div className="input"> 
          <input ref={txtref} type="text" id="text" placeholder="New ToDo"/>
          <button className="add" onClick={create}><FaPlus /></button>
        </div>
        <button className="clear" onClick={delCompleted}><AiFillDelete /></button>
      </div>
      <Todolist toggleTodo={toggleTodo} todos={todos}/>
    </div>
  )
}

export default App;
