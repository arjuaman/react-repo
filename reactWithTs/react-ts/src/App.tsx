import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos=[
    new Todo('Hello from todoItem'),
    new Todo('Hello again')
  ];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
