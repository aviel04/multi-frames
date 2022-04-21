import './App.css';
import TodoList from './TodoList';
import React, {useState, useRef} from 'react';
import { v4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === "") {
      alert("Todo name is required")
      return
    }
    setTodos(prevTodos =>{
      return[...prevTodos,{id: v4() ,name: name, complete:false}]
    })
    todoNameRef.current.value = null;
  }

  return(
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do </div>
    </>

  )
}

export default App;















/*   const [todos, setTodos] = useState([])

  const todoText = useRef();

  let useEffect = (() => {
    const existingTodos = localStorage.getItem('todos')
    setTodos(existingTodos ? JSON.parse(existingTodos) : [])
  },[]);

  function addTodo(event){
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {todos.map((todo=>(<li key={todo}>{todo}</li>)))}
        </ul>
        <form onSubmit={addTodo}>
          <input ref={todoText} type="text" name="todo"/>
          <input type="submit" value="Add Todo" />
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */