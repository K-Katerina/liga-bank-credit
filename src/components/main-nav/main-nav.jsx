import React from 'react';
import PropTypes from 'prop-types';
import {Menu} from '../menu/menu';
import {Logo} from '../logo/logo';
import {SignIn} from '../sign-in/sign-in';

const MainNav = ({className}) => {
    return (
        <nav className={`${className} main-nav wrapper`}>
            <Logo className="main-nav__logo"/>
            <Menu className="main-nav__menu"/>
            <SignIn className="main-nav__sign-in"/>
        </nav>
    );
};

MainNav.propTypes = {
    className: PropTypes.string
};

export {MainNav};
