import React from 'react';
import PropTypes from 'prop-types';

const Suggest = ({className}) => {

    return (
        <section className={`suggest ${className}`}>
            <h3 className="suggest__subtitle">Наше предложение</h3>
        </section>
    );
};

Suggest.propTypes = {
    className: PropTypes.string.isRequired,
};

export {Suggest};
