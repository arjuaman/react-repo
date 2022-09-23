import "./Card.css";

function Card(props){
    const classes = 'card '+ props.className;               // so that other CSS properties other than provided by Card.css also get applied
    return <div className={classes}>{props.children}</div>
}

export default Card;