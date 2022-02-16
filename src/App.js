import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  document.title = 'Todo Lists';
  let firstList = {
    todoItems: [],
    id: 0,
    title: 'First Todo List',
  };
  const [todoLists, setTodoLists] = useState([firstList]);

  const showAllLists = (id) => {
    //Shows all todo lists except the one from which the function was called
    let output = [...todoLists].filter((todo) => todo.id !== id);
    console.log('show all lists');
    return output;
  };

  const updateList = (childdata, id) => {
    let newArr = [...todoLists];
    newArr[id].todoItems = childdata;
    setTodoLists(newArr);
  };

  const sendTitleToParent = (title, id) => {
    //Func to send title change to parent
    let newArr = [...todoLists];
    newArr[id].title = title;
    setTodoLists(newArr);
    console.log(todoLists);
  };

  const addToId = (text, id) => {
    let newArr = [...todoLists];
    newArr[id].todoItems = [
      ...newArr[id].todoItems,
      {
        text: text,
        id: newArr[id].todoItems.at(-1)
          ? newArr[id].todoItems.at(-1).id + 1
          : 0,
      },
    ];
    setTodoLists(newArr);
    console.log(todoLists);
  };

  const addList = () => {
    let newTodoList = [
      ...todoLists,
      {
        todoItems: [],
        id: todoLists.at(-1).id + 1,
        title: 'Todo list #' + (todoLists.at(-1).id + 2),
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
            title={listItem.title}
            updateList={updateList}
            listId={listItem.id}
            addToId={addToId}
            sendTitleToParent={sendTitleToParent}
            showAllLists={showAllLists}
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
