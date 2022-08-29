import { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoForm from './components/TodoForm';
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
  function handleTodoFormSubmit(formValue){
    console.log('Form Submit: ', formValue);
    const newTodo = {
      id: todoList.length + 1,
      ...formValue
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>Nhập đê</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h2>Todo List</h2>
      <TodoList todos={todoList} onTodoClick={handleTodoList} />
    </div>
  );
}

export default App;
