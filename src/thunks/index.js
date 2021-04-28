import {login, logout} from '../store/actions';

export const saveToLocalStorage = ({email, password}) => {
    return (dispatch) => {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        dispatch(login(email));
    }
};

export const clearToLocalStorage = () => {
    return (dispatch) => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        dispatch(logout());
    }
};
