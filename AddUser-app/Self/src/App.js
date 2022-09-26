import React, {useState} from 'react';
import InputForm from './components/InputForm';
import Display from './components/Display';

const userData = [];
const App = () =>{
  const [newData, setNewData] = useState(userData);
  const userDataHandler = (newEntry) => {
    setNewData((existingEntries)=>{
      return [newEntry, ...existingEntries];
    });
  }
  console.log(newData);
  return (
    <div>
      <InputForm onAddUserData={userDataHandler}/>
      <Display onShow={newData} />
    </div>
  );
}

export default App;
