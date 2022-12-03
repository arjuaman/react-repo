import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import GameContainer from './components/GameContainer';
import Sender from './components/Sender';
import Receiver from './components/Receiver';

function App() {
  const text = "props text from parent";
  // const [plant, setPlant] = useState("");
  const [myarr, setMyArr] = useState([] as any[]);
  const receivingHandler = (data :any) =>{
    console.log(data);
    // setPlant(data);
    setMyArr(data);
  };

  return (
    <div className="App">
      {/* <GameContainer propsFuncFromParent={text}>Hola Amigos!</GameContainer> */} 
      <Sender dataFromSender={receivingHandler}></Sender>
      {/* <Receiver>{myarr}</Receiver> */}
      {myarr.map(item=><Receiver 
        key={Math.random().toString()}
        name={item.name} 
        age={item.age}
      />)}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
  );
}

export default App;
