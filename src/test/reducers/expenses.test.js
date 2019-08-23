import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
    // Given

    // When
    const state = expensesReducer(undefined, { type: '@@INIT' });

    // Then
    expect(state).toEqual([])
});

test('Should remove expense by id', () => {
    // Given
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    // When
    const state = expensesReducer( expenses, action );

    // Then
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if id not found', () => {
    // Given
    const action = {
        type:'REMOVE_EXPENSE',
        id: '1234'
    }

    // When
    const state = expensesReducer( expenses, action );

    // Then
    expect(state).toEqual(expenses);
});

test('Should add an expense by id', () => {
    // Given
    const expense = {
            id:'4',
            description: 'Test description four',
            note: 'Test Note four',
            amount: 400,
            createdAt: 100
    }
    const action = {
        type:'ADD_EXPENSE',
        expense
    }

    // When
    const state = expensesReducer( expenses, action );

    // Then
    expect(state).toEqual([...expenses,expense]);
});

test('Should edit expense', () => {
    // Given
    const description = 'edited description'
    const action = {
        type:'EDIT_EXPENSE',
        id: expenses[0].id,
        updates:{
            description
        }
    }

    // When
    const state = expensesReducer( expenses, action );
    // Then
    expect(state[0].description).toEqual(description);
});

test('Should not edit expense when no valid ID given', () => {
    // Given
    const description = 'edited description'
    const action = {
        type:'EDIT_EXPENSE',
        id: '1234',
        updates:{
            description
        }
    }

    // When
    const state = expensesReducer( expenses, action );
    // Then
    expect(state).toEqual(expenses);
});