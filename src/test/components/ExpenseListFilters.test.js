import React from 'react';
import moment from 'moment'

import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { defaultFilters, prepopFilters } from '../fixtures/filters'

let setTextFilter; let sortByDate; let sortByAmount; let setStartDate; let setEndDate; let wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={defaultFilters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            />);
})

test('Should render expense list filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('Should render expense list filters with prepop data correctly', () => {
    wrapper.setProps({
        filters: prepopFilters
    });
    expect(wrapper).toMatchSnapshot();
})

test('Should handle text change', () => {
    const value = 'test value';
    wrapper.find('input').at(0).simulate('change', {
        target:{ value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test('Should sort by date change', () => {
    const value = 'date';
    wrapper.find('select').at(0).simulate('change', {
        target:{ value }
    })
    expect(sortByDate).toHaveBeenCalled();
})

test('Should sort by amount change', () => {
    const value = 'amount';
    wrapper.find('select').at(0).simulate('change', {
        target:{ value }
    })
    expect(sortByAmount).toHaveBeenCalled();
})

test('Should handle date change', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(3,'days');
    
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate,
        endDate
    });

    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

test('Should handle date focus change', () => {
    const isFocused = 'endDate';

    wrapper.find('DateRangePicker').prop('onFocusChange')(isFocused);

    expect(wrapper.state('calendarFocused')).toBe(isFocused);
})