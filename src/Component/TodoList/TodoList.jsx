import React from "react";
import Todo from "./Todo/Todo";
import "./TodoList.css";
export default function TodoList() {
  return (
    <div className="container-todos">
      <div className="cover-title-box">
        <h1 className="title-box">Todo List</h1>
        <p className="info-box">Get things done, one item at a time.</p>
      </div>
      <Todo />
    </div>
  );
}
