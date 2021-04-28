import PropTypes from 'prop-types';
import React, {useState} from "react";
import {useDispatch} from "react-redux";
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
    }

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
                               onChange={(event) => {
                                    setErrorEmail('');
                                    setEmail(event.target.value)
                               }}/>
                        <Input id="password"
                               value={password}
                               label="Пароль"
                               className={`${errorPassword && 'input--error'} form-login__input input--password`}
                               type="password"
                               sublabel={errorPassword}
                               onChange={(event) => {
                                    setErrorPassword('');
                                    setPassword(event.target.value)
                               }}/>
                        <a className="form-login__link" href="/">Забыли пароль?</a>
                        <Button type="submit" className="form-login__submit" nameButton="Войти"/>
                    </div>
                </form>
        </Modal>
    );
}

FormLogin.propTypes = {
    className: PropTypes.string
};

export {FormLogin};
