import moment from 'moment'
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('Should generate set start date action object', () => {
    // Given
    const date = moment(0);

    // When
    const action = setStartDate(date);

    // Then
    expect(action).toEqual({
        type:'SET_START_DATE',
        date: moment(0)
    })
})

test('Should generate set end date action object', () => {
    // Given
    const date = moment(0);

    // When
    const action = setEndDate(date);

    // Then
    expect(action).toEqual({
        type:'SET_END_DATE',
        date: moment(0)
    })
})

test('Should generate set text filter action object', () => {
    // Given
    const text = 'test';

    // When
    const action = setTextFilter(text);

    // Then
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'test'
    })
})

test('Should generate set text filter action object', () => {
    // Given

    // When
    const action = setTextFilter();

    // Then
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    })
})



test('Should generate sort by date action object', () => {
    // Given

    // When
    const action = sortByDate();

    // Then
    expect(action).toEqual({
        type:'SORT_BY_DATE',
    })
})

test('Should generate sort by amount action object', () => {
    // Given

    // When
    const action = sortByAmount();

    // Then
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT',
    })
})