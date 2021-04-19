import React, {useState} from 'react';
import {Credits, Deposits, Insurance, Services} from '../tab-content/tab-content';
import {Tab} from '../tab/tab';
import PropTypes from 'prop-types';
import {Tabs as TabTitles} from '../../const';
import {TabNames} from '../../const';

const Tabs = ({className}) => {

    const [tab, setTab] = useState(TabTitles.DEPOSITS);

    return (
        <section className={`tabs ${className}`}>
            <div className="tabs__wrapper">
                {Object.keys(TabTitles).map((key) =>
                    <Tab key={key}
                         onClick={() => setTab(key)}
                         className={`tabs__${key}-btn ${tab === key && 'tab--active'}`}
                         nameButton={TabNames[key]}/>
                )}
            </div>
            {tab === TabTitles.DEPOSITS && <Deposits/>}
            {tab === TabTitles.CREDITS && <Credits/>}
            {tab === TabTitles.INSURANCE && <Insurance/>}
            {tab === TabTitles.ONLINE_SERVICES && <Services/>}
        </section>
    );
};

Tabs.propTypes = {
    className: PropTypes.string.isRequired
};

export {Tabs};
