import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {changeVisibilityFormLogin} from '../../store/actions';
import {saveToLocalStorage} from '../../thunks';
import {Button} from '../button/button';
import {Input} from '../input/input';
import {Logo} from '../logo/logo';
import {Modal} from '../modal/modal';

const FormLogin = ({className}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailInvalid = validateField('email', email);
        setErrorEmail(emailInvalid);
        const passwordInvalid = validateField('password', password);
        setErrorPassword(passwordInvalid);

        if (!emailInvalid && !passwordInvalid) {
            dispatch(saveToLocalStorage({email, password}));
            closeForm();
        }
    };

    const closeForm = () => {
        setErrorEmail('');
        setErrorPassword('');
        setEmail('');
        setPassword('');
        dispatch(changeVisibilityFormLogin(false));
    };

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case 'email':
                return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                    ? '' : 'Email введен некорректно';
            case 'password':
                return value.match(/^[A-Za-z0-9]+$/i) && value.length >= 8
                    ? '' : 'Пароль введен некорректно';
            default:
                break;
        }
    };

    return (
        <Modal closeModal={() => closeForm()}>
            <form className={`form-login ${className}`} noValidate onSubmit={(event) => handleSubmit(event)}>
                    <h2 className="visually-hidden">Введите e-mail и пароль</h2>
                    <div className="form-login__wrapper">
                        <Logo className="form-login__logo"/>
                        <Input id="email"
                               value={email}
                               label="Логин"
                               className={`${errorEmail && 'input--error'} form-login__input`}
                               type="email"
                               sublabel={errorEmail}
                               autoFocus
                               onChange={(event) => {
                                    setErrorEmail('');
                                    setEmail(event.target.value);
                               }}/>
                        <div className="form-login__input-wrapper">
                            <Input id="password"
                                   value={password}
                                   label="Пароль"
                                   className={`${errorPassword && 'input--error'} form-login__input input--password`}
                                   type={isVisiblePassword ? 'text' : 'password'}
                                   sublabel={errorPassword}
                                   onChange={(event) => {
                                        setErrorPassword('');
                                        setPassword(event.target.value);
                                   }}/>
                            <button className="input__password-img" type="button" onClick={() => setIsVisiblePassword(!isVisiblePassword)}>
                                <svg className="" width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.29878 12L6.33638 11.4893L7.13618 8.59185C5.93899 8.16352 4.82634 7.5393 3.84654 6.7463L1.65854 8.86987L0.220528 7.47486L2.40955 5.35228C1.17386 3.91662 0.343585 2.19431 0 0.353927L2 0C2.77134 4.14262 6.50711 7.28557 11 7.28557C15.4919 7.28557 19.2287 4.14262 20 0L22 0.352941C21.6569 2.19358 20.827 3.91624 19.5915 5.35228L21.7795 7.47486L20.3415 8.86987L18.1535 6.7463C17.1737 7.5393 16.061 8.16352 14.8638 8.59185L15.6636 11.4903L13.7012 12L12.9004 9.10155C11.6426 9.31063 10.3574 9.31063 9.0996 9.10155L8.29878 12Z" fill="#1F1E25"/>
                                </svg>
                            </button>
                        </div>
                        <a className="form-login__link" href="/">Забыли пароль?</a>
                        <Button type="submit" className="form-login__submit" nameButton="Войти"/>
                    </div>
                </form>
        </Modal>
    );
};

FormLogin.propTypes = {
    className: PropTypes.string
};

export {FormLogin};
