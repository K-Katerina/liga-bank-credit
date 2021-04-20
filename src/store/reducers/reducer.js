import {Actions} from '../../const';

const initialState = {
    data: {},
    menuIsOpen: false
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
        default:
            return state;
    }
};

export default reducer;
