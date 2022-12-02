import { Fragment } from "react";
import classes from "./GameContainer.module.css";

const GameContainer = (props: any) => {
    return (
        <Fragment>
            <h1 className={classes.header}>{props.children}</h1>
            <h2>{props.propsFuncFromParent}</h2>
        </Fragment>
    );
}

export default GameContainer;