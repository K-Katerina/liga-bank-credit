import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const Slider = ({className, children}) => {

    const [currentChild, setNewCurrentChild] = useState(0);

    useEffect(() => {
       setTimeout(() => setNewCurrentChild((currentChild + 1) % children.length), 4000)
    }, [currentChild, children.length]);

    return (
        <section className={`${className} slider`}>
            <div className="slider__nav">
                {children[currentChild]}
            </div>
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
