import React,{useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) =>{
    const [enteredUsername, setenteredUsername] = useState('');
    const [enteredAge, setenteredAge] = useState('');

    const addUserHandler = (e) =>{
        e.preventDefault();
        //enteredAge is a string because of initialization as a state
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0)
            return;
        if(Number(enteredAge) < 1)  // or we can write if(+enteredAge < 1)
            return;
        console.log(enteredUsername, enteredAge);
        setenteredUsername('');
        setenteredAge('');
    }

    const userNameChangeHandler = (e) => {
        setenteredUsername(e.target.value);
    }
    
    const ageChangeHandler = (e) => {
        setenteredAge(e.target.value);
    }

    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={userNameChangeHandler}/>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    );
}

export default AddUser;