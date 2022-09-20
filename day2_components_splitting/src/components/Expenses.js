import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props){
    return(
        <div className="expenses">
            <ExpenseItem name={props.array[0].title} date={props.array[0].date} price={props.array[0].amount}></ExpenseItem>
            <ExpenseItem name={props.array[1].title} date={props.array[1].date} price={props.array[1].amount}></ExpenseItem>
            <ExpenseItem name={props.array[2].title} date={props.array[2].date} price={props.array[2].amount}></ExpenseItem>
            <ExpenseItem name={props.array[3].title} date={props.array[3].date} price={props.array[3].amount}></ExpenseItem>
        </div>
    );
}

export default Expenses;