import React from 'react';
import {Credit} from '../components/credit/credit';
import {Header} from '../components/header/header';
import {Footer} from '../components/footer/footer';

const CreditPage = () => {
    return (
        <React.Fragment>
            <Header/>
            <Credit/>
            <Footer/>
        </React.Fragment>
    );
};

export {CreditPage};
