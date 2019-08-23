import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses'

test('Should filter by text value', () => {
    // Given
    const filters = {
        text: 'two',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    // When
    const result = selectExpenses(expenses, filters)

    // Then
    expect(result).toEqual([ expenses[1] ]);
})

test('Should filter by start date', () => {
    // Given
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    // When
    const result = selectExpenses(expenses, filters)

    // Then
    expect(result).toEqual([ expenses[2], expenses[0] ]);
})

test('Should filter by end date', () => {
    // Given
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    // When
    const result = selectExpenses(expenses, filters)

    // Then
    expect(result).toEqual([ expenses[0], expenses[1] ]);
})

test('Should sort by date', () => {
    // Given
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    // When
    const result = selectExpenses(expenses, filters)

    // Then
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
})

test('Should sort by amount', () => {
    // Given
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    // When
    const result = selectExpenses(expenses, filters)

    // Then
    expect(result).toEqual([ expenses[2], expenses[1], expenses[0] ]);
})