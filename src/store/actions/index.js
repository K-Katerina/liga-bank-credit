import {Actions} from '../../const';

export const getData = (payload) => ({
    type: Actions.GET_DATA,
    payload: payload
});

export const changeVisibilityMenu = (payload) => ({
    type: Actions.CHANGE_VISIBILITY_MENU,
    payload: payload
});

export const changeTarget = (payload) => ({
    type: Actions.CHANGE_TARGET,
    payload: payload
});

export const changeCost = (payload) => ({
    type: Actions.CHANGE_COST,
    payload: payload
});

export const changeFee = (payload) => ({
    type: Actions.CHANGE_FEE,
    payload: payload
});

export const changePeriod = (payload) => ({
    type: Actions.CHANGE_PERIOD,
    payload: payload
});

export const changeUseCapital = (payload) => ({
    type: Actions.CHANGE_USE_CAPITAL,
    payload: payload
});