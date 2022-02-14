import React, { useState } from 'react';
import '../css/TodoList.css';
import Todo from './Todo';

export default function TodoList() {
  const [todoItems, setTodoItems] = useState([
    {
      text: 'text',
      id: 1,
    },
    {
      text: 'text2',
      id: 2,
    },
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem();
    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addItem = () => {
    setTodoItems((todoItems) => [
      ...todoItems,
      {
        text: input,
        id: todoItems.at(-1).id + 1,
      },
    ]);
  };

  const updateItem = (todo) => {
    // update item
  };

  const removeItem = (id) => {
    const arr = [...todoItems].filter((todo) => todo.id !== id);
    setTodoItems(arr);
  };

  return (
    <div className="TodoList">
      <Todo
        todoItems={todoItems}
        updateItem={updateItem}
        removeItem={removeItem}
      />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="add todo item..."
          value={input}
          onChange={handleChange}
        />
      </form>
      <button onClick={addItem}>Add todo</button>
    </div>
  );
}
