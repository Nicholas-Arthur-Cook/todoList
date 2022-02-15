import React, { useState } from 'react';
import '../css/TodoList.css';
import Todo from './Todo';
import { AiFillPlusCircle } from 'react-icons/ai';

export default function TodoList({ todoItems, updateList, listId }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem();
    setInput('');
  };

  const addItem = () => {
    let newArr = [
      ...todoItems,
      {
        text: input,
        id: todoItems.at(-1).id + 1,
      },
    ];
    updateList(newArr, listId);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const updateItem = (todo) => {
    // update item
  };

  const removeItem = (id) => {
    const newArr = [...todoItems].filter((todo) => todo.id !== id);
    updateList(newArr, listId);
  };

  return (
    <div className="TodoList">
      <Todo
        todoItems={todoItems}
        updateItem={updateItem}
        removeItem={removeItem}
      />
      <div className="form-container">
        <form onSubmit={handleSubmit} className="input-field">
          <input
            placeholder="add todo item..."
            value={input}
            onChange={handleChange}
          />
        </form>
        <button onClick={addItem} style={{ flex: 1 }}>
          <AiFillPlusCircle />
        </button>
      </div>
    </div>
  );
}
