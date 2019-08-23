import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('Should set up default filter values', () => {
    // Given
    const reduxDefaultAction = "@@INIT";
    
    // When
    const state = filtersReducer(undefined, { type: reduxDefaultAction});
    
    // Then
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('Should set sortBy to amount', () => {
    // Given
    const filtersType = "SORT_BY_AMOUNT"

    // When
    const state = filtersReducer(undefined, { type: filtersType});

    // Then
    expect(state.sortBy).toEqual('amount')
})

test('Should set sortBy to date', () => {
    // Given
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const filtersType = "SORT_BY_DATE"

    // When
    const state = filtersReducer(currentState, { type: filtersType});

    // Then
    expect(state.sortBy).toEqual('date')
})

test('Should set text filter', () => {
    // Given
    
    const filtersType = "SET_TEXT_FILTER"
    const text = 'rent';

    // When
    const state = filtersReducer(undefined, { text, type: filtersType});

    // Then
    expect(state.text).toBe(text)
})

test('Should set startDate filter', () => {
    // Given
    
    const filtersType = "SET_START_DATE"
    const date = moment(0);

    // When
    const state = filtersReducer(undefined, { date, type: filtersType});

    // Then
    expect(state.startDate).toBe(date)
})

test('Should set endDate filter', () => {
    // Given
    
    const filtersType = "SET_END_DATE"
    const date = moment(0);

    // When
    const state = filtersReducer(undefined, { date, type: filtersType});

    // Then
    expect(state.endDate).toBe(date)
})