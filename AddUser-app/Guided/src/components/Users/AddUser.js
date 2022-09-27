import React,{useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) =>{
    const [enteredUsername, setenteredUsername] = useState('');
    const [enteredAge, setenteredAge] = useState('');

    const addUserHandler = (e) =>{
        e.preventDefault();
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