import moment from 'moment';

export default [{
    id:'1',
    description: 'Test description',
    note: 'Test Note',
    amount: 100,
    createdAt: 0
},
{
    id:'2',
    description: 'Test description two',
    note: 'Test Note two',
    amount: 200,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id:'3',
    description: 'Test description three',
    note: 'Test Note three',
    amount: 300,
    createdAt: moment(0).add(4, 'days').valueOf()
}
]