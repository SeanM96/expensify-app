import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'
import 'normalize-css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
})
const waterBill = store.dispatch(addExpense({description: 'Water Bill', amount: 100, createdAt: 100000000000000}));
const gasBill = store.dispatch(addExpense({description: 'Gas Bill', amount: 100, createdAt: 5000}));
const rent = store.dispatch(addExpense({description: 'Rent', amount: 1095, createdAt: 0}));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));