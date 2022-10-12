import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Todos items={["Hello from props","HI from props"]} />
    </div>
  );
}

export default App;
