import React,{useState} from 'react';

const GameButton = (props: any) => {
    let origTitle = props.sample;
    const [title,setTitle] = useState(origTitle);
    const btnClickHandler = () =>{
        // origTitle = "Changed!";
        setTitle("Changed!");
    };
    return (
        <button onClick={btnClickHandler}>
            {title}
        </button>
    );
};

export default GameButton;