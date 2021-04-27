import {Actions, CreditTarget} from '../../const';

const initialState = {
    data: {},
    menuIsOpen: false,
    target: null,
    formLoginIsOpen: false,
    cost: 0,
    fee: 0,
    period: 1,
    useCapital: true,
    isCredit: null,
    isLoggedIn: false,
    successIsOpen: false,
    login: null
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
        case Actions.CHANGE_VISIBILITY_SUCCESS:
            return {
                ...state,
                successIsOpen: action.payload
            };
        case Actions.CHANGE_TARGET:
            return {
                ...state,
                isCredit: action.payload === CreditTarget.AUTO_CREDIT,
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
        case Actions.LOGIN:
            return {
                ...state,
                login: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
