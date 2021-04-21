import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Indicators from '../indicators/indicators';

const Slider = ({className, children}) => {

    const [currentChild, setCurrentChild] = useState(0);
    const [timeoutId, setTimeoutId] = useState(null);

    const setNewCurrentChild = (value) => {
        setCurrentChild((currentChild + value) % children.length)
    };

    const onSliderClick = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setNewCurrentChild(1);
    };

    useEffect(() => {
        setTimeoutId(setTimeout(() => setNewCurrentChild(1), 4000));
    }, [currentChild]);

    return (
        <section className={`${className} slider`}>
            <div className="slider__img" onTouchMove={() => onSliderClick()}>
                {children[currentChild]}
            </div>
            <Indicators className="slider__indicators" activeIndicator={currentChild} count={children.length}/>
        </section>
    );
};

Slider.propTypes = {
    className: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string
    }))
};

export {Slider};
