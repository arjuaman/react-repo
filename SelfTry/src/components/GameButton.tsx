const GameButton = (props: any) => {
    let title = props.sample;
    const btnClickHandler = () =>{
        title = "Changed!";
    };
    return (
        <button onClick={btnClickHandler}>
            {title}
        </button>
    );
};

export default GameButton;