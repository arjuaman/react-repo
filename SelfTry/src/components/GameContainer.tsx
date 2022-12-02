import { Fragment } from "react";
import GameButton from "./GameButton";
import classes from "./GameContainer.module.css";

const GameContainer = (props: any) => {
    const reasonForUsingStates = "this should get changed from clicking";
    return (
        <Fragment>
            <h1 className={classes.header}>{props.children}</h1>
            <h2>{props.propsFuncFromParent}</h2>
            <GameButton sample={reasonForUsingStates}></GameButton>
        </Fragment>
    );
}

export default GameContainer;