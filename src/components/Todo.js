import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import '../css/Todo.css';

const Todo = ({
  todoItems,
  updateItem,
  removeItem,
  addToId,
  showAllLists,
  listId,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const handleChange = (e) => {
    setEdit({
      id: edit.id,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(edit.value, edit.id);
    setEdit({
      id: null,
      value: '',
    });
  };

  const handleMove = (index, dest) => {
    let text = edit.value;
    addToId(text, dest);
    removeItem(index);
    setEdit({
      id: null,
      value: '',
    });
  };

  const openEdit = (index, value) => {
    setEdit({
      id: index,
      value: value,
    });
    console.log('edit opened');
    console.log(showAllLists(listId));
  };

  return todoItems.map((todo, index) => {
    return edit.id === index ? (
      <div key={index}>
        <form onSubmit={handleSubmit} className="edit-todo">
          <input value={edit.value} onChange={handleChange} />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>

        {showAllLists(listId).map((list, j) => {
          return (
            <div key={j}>
              <button onClick={() => handleMove(index, list.id)}>
                Move to {list.title}
              </button>
            </div>
          );
        })}
      </div>
    ) : (
      <div key={index} className="todo-container">
        <div className="text">{todo.text}</div>
        <div className="item">
          <button onClick={() => openEdit(index, todo.text)}>
            <AiFillEdit />
          </button>
        </div>
        <div className="item">
          <button onClick={() => removeItem(todo.id)}>
            <AiFillDelete />
          </button>
        </div>
      </div>
    );
  });
};

export default Todo;
