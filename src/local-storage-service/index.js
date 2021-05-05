export const saveLoginToLocalStorage = ({email, password}) => {
    localStorage.setItem('login', email);
    localStorage.setItem('password', password);
};

export const clearLoginToLocalStorage = () => {
    localStorage.removeItem('password');
};

export const saveUserDataToLocalStorage = ({email, phone, name}) => {
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('name', name);
};
