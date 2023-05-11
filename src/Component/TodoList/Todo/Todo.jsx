import React, { useLayoutEffect, useRef, useState } from "react";
import { BsTrash3Fill, BsClockFill, BsCheckCircleFill } from "react-icons/bs";
export default function Todo() {

  
  if(!localStorage.getItem('todos')){
    localStorage.setItem("todos", JSON.stringify([]));
  }

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));

  const inputTodo = useRef();

  function addTodoCart() {
    const mainInputTodo = inputTodo.current.value;
    if (mainInputTodo) {
      const createTodoObj = { id: todos.length + 1, title: mainInputTodo, complete:false};
      setTodos((prevState) => [...prevState, createTodoObj]);
      inputTodo.current.value = "";
    }
  }

  useLayoutEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  function removeTodoCart(id){
    const mainTodoNotRemoved = todos.filter(todo => todo.id != id)
    setTodos(mainTodoNotRemoved)
  }

  function changeComplete(id){ 

    const mainTodoComplete = todos.filter(todo => todo.id === id)[0]
    mainTodoComplete.complete = !mainTodoComplete.complete    
    setTodos(prevState => [...prevState])
  }

  function clearAllTodos(){
    setTodos([])
  }
  return (
    <div className="cover-box-todos">
      <div className="cover-add-todo">
        <input
          type="text"
          className="input-todos"
          placeholder="Add Todos..."
          maxLength={60}
          ref={inputTodo}
          onKeyDown={(e) => (e.key === "Enter" ? addTodoCart() : "")}
        />
        <button className="btn-add-todo" onClick={addTodoCart}>Add Todo</button>
        <button className="btn-clear-all-todo" onClick={clearAllTodos}>Clear All</button>
      </div>
      {todos.map((todo) => (
        <div className={`todo-box ${todo.complete ? "complete-todo":""}`} key={todo.id}>
          <p className="title-todo">{todo.title}</p>
          <div className="cover-event">
            {
            todo.complete ? 
            <BsCheckCircleFill className="check-icons" onClick={ () => changeComplete(todo.id) } /> 
              : 
            <BsClockFill className="pending-icons" onClick={ () => changeComplete(todo.id) } /> 
            }
            <BsTrash3Fill className="bin-icons" onClick={ (e)=> removeTodoCart(todo.id) } />
          </div>
        </div>
      ))}
    </div>
  );
}
