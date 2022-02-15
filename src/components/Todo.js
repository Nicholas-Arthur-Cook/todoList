import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import '../css/Todo.css';

const Todo = ({ todoItems, updateItem, removeItem }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const updateHandler = (value) => {
    updateItem(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };
  return todoItems.map((todo, index) => (
    <div key={index} className="todo-container">
      <div className="text">{todo.text}</div>
      <div className="item">
        <button onClick={updateHandler}>
          <AiFillEdit />
        </button>
      </div>
      <div className="item">
        <button onClick={() => removeItem(todo.id)}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  ));
};

export default Todo;
