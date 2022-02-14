import React, { useState } from 'react';

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
    <div key={index} className="todo-wrapper">
      <div>{todo.text}</div>
      <div>
        <button onClick={updateHandler}>Edit</button>
      </div>
      <div>
        <button onClick={() => removeItem(todo.id)}>Delete</button>
      </div>
    </div>
  ));
};

export default Todo;
