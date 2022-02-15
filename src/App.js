import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  let firstList = {
    todoItems: [
      {
        text: 'text',
        id: 1,
      },
      {
        text: 'text2',
        id: 2,
      },
    ],
    id: 0,
  };
  const [todoLists, setTodoLists] = useState([firstList]);

  const updateList = (childdata, id) => {
    let newArr = [...todoLists];
    newArr[id].todoItems = childdata;
    setTodoLists(newArr);
  };

  const addList = () => {
    let newTodoList = [
      ...todoLists,
      {
        todoItems: [
          {
            text: 'text',
            id: 1,
          },
        ],
        id: todoLists.at(-1).id + 1,
      },
    ];
    setTodoLists(newTodoList);
  };

  return (
    <div className="App">
      {todoLists.map((listItem) => (
        <div key={listItem.id} className="list">
          <TodoList
            todoItems={listItem.todoItems}
            updateList={updateList}
            listId={listItem.id}
          />
        </div>
      ))}
      <div className="list">
        <button onClick={addList}>Add a list</button>
      </div>
    </div>
  );
}

export default App;
