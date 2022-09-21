import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
  const onSaveExpDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
    const expenseData = {
      ...enteredExpenseData,   //generated from submit handler
      id: Math.random().toString()
    };
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpDataHandler} />
    </div>
  );
}

export default NewExpense;
