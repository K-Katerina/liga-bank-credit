import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {changeVisibilityMenu} from '../../store/actions/actions';
import {Burger} from '../burger/burger';
import {CloseButton} from '../close-button/close-button';
import {Menu} from '../menu/menu';
import {Logo} from '../logo/logo';
import {SignIn} from '../sign-in/sign-in';

const MainNav = ({className}) => {

    const dispatch = useDispatch();
    const menuIsOpen = useSelector(state => state.menuIsOpen);

    const onClickClose= () => {
        dispatch(changeVisibilityMenu(false));
    };

    return (
        <nav className={`${className} main-nav wrapper`}>
            <Burger className="main-nav__burger"/>
            <Logo className="main-nav__logo"/>
            <Menu className="main-nav__menu"/>
            {menuIsOpen
                ? <CloseButton className="main-nav__close" onClick={() => onClickClose()}/>
                : <SignIn className="main-nav__sign-in"/>
            }
        </nav>
    );
};

MainNav.propTypes = {
    className: PropTypes.string
};

export {MainNav};
