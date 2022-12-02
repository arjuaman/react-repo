import React,{useState} from 'react';

const GameButton = (props: any) => {
    let origTitle = props.sample;
    let sampleText2 = "Amigo";
    const [title,setTitle] = useState(origTitle);
    const [text,setText] = useState(sampleText2);
    const btnClickHandler = (e:any) =>{
        // origTitle = "Changed!";
        e.preventDefault();
        setTitle("Changed!");
    };
    const textChangeHandler = (e:any) => {
        setText(e.target.value);
    };
    return (
        <React.Fragment>
        <button onClick={btnClickHandler}>
            SUBMIT
        </button>
        <div>{title}</div>
        <input type="text" onChange={textChangeHandler}></input>
        <br/>
        <label>{text}</label>
        </React.Fragment>
    );
};

export default GameButton;