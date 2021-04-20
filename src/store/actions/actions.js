import {Actions} from '../../const';

export const getData = (payload) => ({
    type: Actions.GET_DATA,
    payload: payload
});

export const changeVisibilityMenu = (payload) => ({
    type: Actions.CHANGE_VISIBILITY_MENU,
    payload: payload
});
