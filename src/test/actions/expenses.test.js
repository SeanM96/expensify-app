import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should set up remove expense action object', () => {
    // Given
    const id = '123abc'

    // When 
    const action = removeExpense({id});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
})

test('Should set up edit expense action object', () => {
    // Given
    const id = '123abc';
    const updates = { note: 'new note value' };

    // When
    const action = editExpense( id, updates );
    
    // Then
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates: { note: 'new note value'}
    })
})

test('Should set up add expense action object', () => {
    // Given
    const expenseData = {
        description:'Rent',
        amount: 500,
        createdAt: 5000000,
        note: 'test note'
    };

    // When
    const action = addExpense( expenseData );
    
    // Then
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should set up add expense action object with default values', () => {
    // Given
    

    // When
    const action = addExpense();
    
    // Then
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description:'',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})