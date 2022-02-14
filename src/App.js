import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todoLists, setTodoLists] = useState([<TodoList />]);

  return (
    <div className="App">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
