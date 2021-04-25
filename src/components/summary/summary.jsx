import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({className}) => {

    return (
        <section className={`summary ${className}`}>
            <h3 className="summary__subtitle">Шаг 3. Оформление заявки</h3>
        </section>
    );
};

Summary.propTypes = {
    className: PropTypes.string.isRequired,
};

export {Summary};
