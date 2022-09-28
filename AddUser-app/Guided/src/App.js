import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) =>{
    setUsersList((prev)=>{
      return [{name: uName, age: uAge, id: Math.random().toString()},...prev];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList usersArr={usersList} />
    </div>
  );
}

export default App;
