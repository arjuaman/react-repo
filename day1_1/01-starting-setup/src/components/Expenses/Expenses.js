import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  //   console.log(filteredYear);
  const filteredArray = props.myArray.filter(item => {return item.date.getFullYear().toString()==filteredYear;});
  //  This console was creating error on null entries!!: console.log(filteredArray[0].date.getFullYear());
  
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList array={filteredArray}/>
      </Card>
    </div>
  );
};

export default Expenses;
