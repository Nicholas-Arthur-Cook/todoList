import React, { useState } from 'react';
import '../css/TodoList.css';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todoItems, setTodoItems] = useState(['test', 'test']);

  function addItem() {
    setTodoItems((todoItems) => [...todoItems, 'test']);
  }

  return (
    <div className="TodoList">
      {todoItems.map((todo) => {
        return <TodoItem todo={todo}></TodoItem>;
      })}
      <button onClick={addItem}>+</button>
    </div>
  );
}
