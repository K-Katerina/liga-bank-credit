import React from 'react';
import {Map} from '../map/map';
import {Tabs} from '../tabs/tabs';

const Credit = () => {
    return (
        <main className="credit">
            <Tabs className="credit__tabs"/>
            <Map className="credit__map">Map</Map>
        </main>
    );
};

export {Credit};
