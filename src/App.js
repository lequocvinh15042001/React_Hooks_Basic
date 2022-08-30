import { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

  function App() {
    const [todoList, setTodoList] = useState([
      {id: 1, title: 'Lê Quốc Vinh đẹp trai' },
      {id: 2, title: 'Ahahaha' },
      {id: 3, title: 'CLQGV' },
    ]);

    const [postList, setPosstList] = useState([]);

    useEffect(()=>{
      async function fetchPostList(){
        try {
          const requestUrl='http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
          const response = await fetch(requestUrl);
          const responseJSON = await response.json();
          console.log({responseJSON});
  
          const {data} = responseJSON;
          setPosstList(data);
        } catch (error) {
          console.log('Failed to fetch api: ', error.message);
        }

      }
      fetchPostList();
    },[]);


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
      {/* <h1>Nhập đê</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h2>Todo List</h2>
      <TodoList todos={todoList} onTodoClick={handleTodoList} /> */}
       <h2>Post List</h2>
       <PostList posts= {postList} />
    </div>
  );
}

export default App;
