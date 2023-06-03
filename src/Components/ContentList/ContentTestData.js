import {
    v4 as uuidv4
} from 'uuid';

export const testData = [{
        id: uuidv4(),
        nameF: 'Американський долар',
        code: '840',
        nameS: 'usd',
        course: '38',
        symbol: '$'
    },
    {
        id: uuidv4(),
        nameF: 'Євро',
        code: '038',
        nameS: 'eur',
        course: '40',
        symbol: '€'
    },
    {
        id: uuidv4(),
        nameF: 'Єна',
        code: '039',
        nameS: 'jpy',
        course: '2,6',
        symbol: '¥'
    }
]