import {Actions} from '../../const';

export const getData = (payload) => ({
    type: Actions.GET_DATA,
    payload: payload
});
