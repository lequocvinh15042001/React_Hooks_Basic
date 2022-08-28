import { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    {id: 1, title: 'Lê Quốc Vinh đẹp trai' },
    {id: 2, title: 'Ahahaha' },
    {id: 3, title: 'CLQGV' },
  ]);
function handleTodoList(todo){
  console.log(todo);
  const index = todoList.findIndex(x => x.id === todo.id)
  if(index < 0) return;

  const newTodoList = [...todoList];
  newTodoList.splice(index, 1);
  setTodoList(newTodoList);
}
  return (
    <div className="app">
      <h2>Todo List</h2>
      <TodoList todos={todoList} onTodoClick={handleTodoList} />
    </div>
  );
}

export default App;
