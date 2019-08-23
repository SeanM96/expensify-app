import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashBoard = () => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);
export default ExpenseDashBoard;