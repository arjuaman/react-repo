import React,{useState, useRef} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) =>{
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setenteredUsername] = useState('');
    // const [enteredAge, setenteredAge] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const addUserHandler = (e) =>{
        e.preventDefault();
        const nameReq = nameInputRef.current.value;
        const ageReq = ageInputRef.current.value;
        //enteredAge is a string because of initialization as a state
        if(nameReq.trim().length===0 || ageReq.trim().length===0){
            setErrorMsg({
                title: 'Invalid input',
                message: 'Invalid username and age (enter non-empty values)' 
            });
            return;
        }
        if(Number(ageReq) < 1) { // or we can write if(+enteredAge < 1)
            setErrorMsg({
                title: 'Invalid age',
                message: 'Please enter non-negative age ( >0 )' 
            });
            return;
        }
        // console.log(enteredUsername, enteredAge);
        // props.onAddUser(enteredUsername, enteredAge);
        props.onAddUser(nameReq, ageReq);
        // setenteredUsername('');
        // setenteredAge('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    // const userNameChangeHandler = (e) => {
    //     setenteredUsername(e.target.value);
    // }
    
    // const ageChangeHandler = (e) => {
    //     setenteredAge(e.target.value);
    // }

    const errorHandler= () => {
        setErrorMsg(null);
    };

    return (
        <div>
        {errorMsg && <ErrorModal title={errorMsg.title} message={errorMsg.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" ref={nameInputRef}/>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" ref={ageInputRef}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    );
}

export default AddUser;