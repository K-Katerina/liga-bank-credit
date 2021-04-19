import React from 'react';
import {MainNav} from '../main-nav/main-nav';
import {Child0, Child1, Child2} from '../preview/preview';
import {Slider} from '../slider/slider';

const Header = () => {
    return (
        <header className="header">
            <MainNav className="header__nav"/>
            <Slider className="header__slider">
                <Child0/>
                <Child1/>
                <Child2/>
            </Slider>
        </header>
    );
};

export {Header};
