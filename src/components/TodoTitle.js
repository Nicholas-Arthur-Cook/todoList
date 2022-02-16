import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import '../css/TodoTitle.css';

export default function TodoTitle({ sendTitleToParent, listId }) {
  const [title, setTitle] = useState('');
  const [initialized, setInitialized] = useState(false);
  const [edit, setEdit] = useState(false);

  const openEdit = () => {
    setEdit(true);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    setEdit(false);
    setInitialized(true);
    sendTitleToParent(title, listId);
  };

  return edit || !initialized ? (
    <div className="container">
      <form onSubmit={handleSubmit} className="title">
        <input
          placeholder="add a title..."
          value={title}
          onChange={handleChange}
        />
        <button type="submit" className="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  ) : (
    <div className="container">
      <h3 className="title">{title}</h3>
      <button className="button" onClick={() => openEdit()}>
        <AiFillEdit />
      </button>
    </div>
  );
}
