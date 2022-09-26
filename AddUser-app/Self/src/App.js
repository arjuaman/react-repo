import React, {useState} from 'react';
import InputForm from './components/InputForm';

const userData = [];
const App = () =>{
  const [newData, setNewData] = useState(userData);
  const userDataHandler = (newEntry) => {
    setNewData((existingEntries)=>{
      return [newEntry, ...existingEntries];
    });
  }
  return (
    <div>
      <InputForm onAddUserData={userDataHandler}/>
    </div>
  );
}

export default App;
