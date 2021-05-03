import {Actions} from '../../const';

const localEmail = localStorage.getItem('email');

const initialState = {
    menuIsOpen: false,
    target: null,
    formLoginIsOpen: false,
    cost: 0,
    fee: 0,
    period: 1,
    useCapital: true,
    useInsurance: true,
    useComprehensiveCover: true,
    email: localEmail
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_DATA:
            return {
                ...state,
                data: action.payload
            };
        case Actions.CHANGE_VISIBILITY_MENU:
            return {
                ...state,
                menuIsOpen: action.payload
            };
        case Actions.CHANGE_VISIBILITY_FORM_LOGIN:
            return {
                ...state,
                formLoginIsOpen: action.payload
            };
        case Actions.CHANGE_TARGET:
            return {
                ...state,
                target: action.payload
            };
        case Actions.CHANGE_COST:
            return {
                ...state,
                cost: action.payload
            };
        case Actions.CHANGE_FEE:
            return {
                ...state,
                fee: action.payload
            };
        case Actions.CHANGE_PERIOD:
            return {
                ...state,
                period: action.payload
            };
        case Actions.CHANGE_USE_CAPITAL:
            return {
                ...state,
                useCapital: action.payload
            };
        case Actions.CHANGE_USE_COMPREHENSIVE_COVER:
            return {
                ...state,
                useComprehensiveCover: action.payload
            };
        case Actions.CHANGE_USE_INSURANCE:
            return {
                ...state,
                useInsurance: action.payload
            };
        case Actions.LOGIN:
            return {
                ...state,
                email: action.payload
            };
        case Actions.LOGOUT:
            return {
                ...state,
                email: null
            };
        default:
            return state;
    }
};

export default reducer;
