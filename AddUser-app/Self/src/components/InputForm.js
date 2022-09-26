import React,{useState} from 'react';
import styles from './InputForm.module.css';

const InputForm = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const submitFormHandler = (e) => {
        e.preventDefault();
        
        const dataArray = {
            name: userName, 
            age: userAge,
            id: Math.random().toString(),
        };
        props.onAddUserData(dataArray);
        setUserName('');
        setUserAge('');
    }
    const inputNameHandler = (e) => {
        setUserName(e.target.value);
    }
    const inputAgeHandler = (e) => {
        setUserAge(e.target.value);
    }
    
    return (
        <form onSubmit={submitFormHandler}>
            <div  className={styles.formClass}>
            <div className={`${styles['formClass']} ${styles.entries}`} >
                <label>Username</label><br/>
                <input type="text" value={userName} onChange={inputNameHandler}></input>
            </div>
            <div className={`${styles['formClass']} ${styles.entries}`}>
                <label>Age (Years)</label><br/>
                <input type="number" value={userAge} onChange={inputAgeHandler}></input>
            </div>
            <div className={`${styles['formClass']} ${styles.entries}`}>
                <button type="submit">Add User</button>
            </div>
            </div>
        </form>
    );
}

export default InputForm;