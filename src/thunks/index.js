import {login, logout, saveData} from '../store/actions';

export const saveLoginToLocalStorage = ({email, password}) => {
    return (dispatch) => {
        localStorage.setItem('login', email);
        localStorage.setItem('password', password);
        dispatch(login(email));
    };
};

export const clearLoginToLocalStorage = () => {
    return (dispatch) => {
        localStorage.removeItem('login');
        localStorage.removeItem('password');
        dispatch(logout());
    };
};

export const saveUserDataToLocalStorage = ({email, phone, name}) => {
    return (dispatch) => {
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('name', name);
        dispatch(saveData({email, phone, name}));
    };
};
