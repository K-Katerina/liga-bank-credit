import React from 'react';
import {MainNav} from '../main-nav/main-nav';
import {PreviewMain, PreviewMan, PreviewWoman} from '../preview/preview';
import {Slider} from '../slider/slider';

const Header = () => {
    return (
        <header className="header">
            <MainNav className="header__nav"/>
            <Slider className="header__slider">
                <PreviewMain/>
                <PreviewMan/>
                <PreviewWoman/>
            </Slider>
        </header>
    );
};

export {Header};
