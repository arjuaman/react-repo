import { Fragment, useState } from "react";
import GameButton from "./GameButton";
import classes from "./GameContainer.module.css";
import GetGameSpec from "./GetGameSpec";

const GameContainer = (props: any) => {
    const reasonForUsingStates = "this should get changed from clicking SUBMIT button";
    const [text,setText] = useState("");
    // let textData = ""; 
    const getGameNameHandler = (e: any) =>{
        // console.log(e);
        setText(e);
    };

    return (
        <Fragment>
            <h1 className={classes.header}>{props.children}</h1>
            <h2>{props.propsFuncFromParent}</h2>
            <GameButton sample={reasonForUsingStates}></GameButton>
            <GetGameSpec getGameName={getGameNameHandler}></GetGameSpec>
            <h4>{text}</h4>
        </Fragment>
    );
}

export default GameContainer;