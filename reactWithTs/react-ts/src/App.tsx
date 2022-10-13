import { useState } from 'react';

import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  // const todos=[
  //   new Todo('Hello from todoItem'),
  //   new Todo('Hello again')
  // ];
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos)=>{
      return [...prevTodos, newTodo];
      // can also be prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
