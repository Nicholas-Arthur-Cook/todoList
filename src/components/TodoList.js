import React, { useState } from 'react';
import '../css/TodoList.css';
import Todo from './Todo';
import { AiFillPlusCircle } from 'react-icons/ai';
import TodoTitle from './TodoTitle';

export default function TodoList({
  sendTitleToParent,
  todoItems,
  updateList,
  listId,
  addToId,
  showAllLists,
}) {
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
        id: todoItems.at(-1) ? todoItems.at(-1).id + 1 : 0,
      },
    ];
    updateList(newArr, listId);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const updateItem = (value, id) => {
    const newArr = todoItems.map(function (todo) {
      return todo.id === id
        ? { text: value, id: id }
        : { text: todo.text, id: todo.id };
    });
    updateList(newArr, listId);
    console.log('Updated id:', id);
    console.log(todoItems);
  };

  const removeItem = (id) => {
    const newArr = [...todoItems].filter((todo) => todo.id !== id);
    updateList(newArr, listId);
  };

  return (
    <div className="TodoList">
      <TodoTitle sendTitleToParent={sendTitleToParent} listId={listId} />
      <Todo
        todoItems={todoItems}
        updateItem={updateItem}
        removeItem={removeItem}
        addToId={addToId}
        showAllLists={showAllLists}
        listId={listId}
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
