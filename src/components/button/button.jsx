import React from 'react';
import PropTypes from 'prop-types';

const Button = ({nameButton = 'Кнопка', className, ...rest}) => {

    return (
        <button className={`button ${className}`}
                {...rest}>
                {nameButton}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    nameButton: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool
};

export {Button};
