import {getResultForBase} from '../api/api';
import {getData} from './actions';

export const fetchData = (date) => {
    return (dispatch) => {
        getResultForBase(date)
            .then(data => dispatch(getData(data)))
    };
};
