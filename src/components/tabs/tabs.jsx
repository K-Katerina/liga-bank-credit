import React, {useState} from 'react';
import Indicators from '../indicators/indicators';
import {Credits, Deposits, Insurance, Services} from '../tab-content/tab-content';
import {Tab} from '../tab/tab';
import PropTypes from 'prop-types';
import {Tabs as TabTitles} from '../../const';
import {TabNames} from '../../const';

const Tabs = ({className}) => {

    const tabOrder = [...Object.keys(TabTitles)];
    const [activeTab, setActiveTab] = useState(TabTitles.DEPOSITS);

    const onTabClick = () => {
        setActiveTab(tabOrder[(tabOrder.indexOf(activeTab) + 1) % tabOrder.length]);
    };

    return (
        <section className={`tabs ${className}`}>
            <div className="tabs__wrapper">
                {tabOrder.map((tab) =>
                    <Tab key={tab}
                         onClick={() => setActiveTab(tab)}
                         className={`tabs__${tab}-btn ${activeTab === tab && 'tab--active'}`}
                         nameButton={TabNames[tab]}/>
                )}
            </div>
            <div className="tabs__content" onTouchMove={() => onTabClick()}>
                {activeTab === TabTitles.DEPOSITS && <Deposits/>}
                {activeTab === TabTitles.CREDITS && <Credits/>}
                {activeTab === TabTitles.INSURANCE && <Insurance/>}
                {activeTab === TabTitles.ONLINE_SERVICES && <Services/>}
            </div>
            <Indicators className="tabs__indicators" count={tabOrder.length} activeIndicator={tabOrder.indexOf(activeTab)}/>
        </section>
    );
};

Tabs.propTypes = {
    className: PropTypes.string.isRequired
};

export {Tabs};
