import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'
import { visible } from 'ansi-colors';

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = (
    {
        id
    } = {}
    ) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (
        id,
        updates
    ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, 
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) =>  {
                if(expense.id === action.id) {
                    return {
                        ...expense,...action.updates
                    } 
                } 
                    return expense;
                
            })
        default:
            return state;
    }
};
// Filters Reducer
const filtersReducerDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate:undefined
};

const sortByDate = () =>
({type:'SORT_BY_DATE'});

const sortByAmount = () =>
({type:'SORT_BY_AMOUNT'});

const setStartDate = (date) =>({
    type:'SET_START_DATE',
    date
})

const setEndDate = (date) =>({
    type:'SET_END_DATE',
    date
})

const setTextFilter = (text) =>({
    type:'SET_TEXT_FILTER',
    text
})


const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT':
            return{ ...state, text:action.text};
        case 'SORT_BY_DATE':
            return{ ...state, sortBy:'date'};
        case 'SORT_BY_AMOUNT':
            return{ ...state, sortBy:'amount'};
        case 'SET_START_DATE':
            return{ ...state, startDate:action.date};
        case 'SET_END_DATE':
            return{ ...state, endDate:action.date};
        case 'SET_TEXT_FILTER':
            return{ ...state, text:action.text};
        default:
            return state;
    }
}
// Store creation

const store = createStore(combineReducers({
     expenses: expensesReducer,
     filters: filtersReducer
}));

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    } ).sort((a,b) => {
            if(sortBy ==='date') {
                return a.createdAt < b.createdAt ? 1 : -1;
            } if(sortBy ==='amount') {
                return a.amount < b.amount ? 1:-1;
            }
    });
}

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21000}))
const expenseTwo = store.dispatch(addExpense({description: 'Food', amount: 300, createdAt: -1000}))
const expenseFive = store.dispatch(addExpense({description: 'Foodtruck', amount: 50, createdAt: -300}))
const expenseThree = store.dispatch(addExpense({description: 'Foodpok', amount: 25000, createdAt: 5000}))
const expenseFour = store.dispatch(addExpense({description: 'Foodewji', amount: 500, createdAt: -10000}))

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(5000));
store.dispatch(sortByAmount());
const demoState = {
    expenses: [{
        id:'jfjsdf',
        description: 'Rent',
        note: 'ndjnsjndjksnadj',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};