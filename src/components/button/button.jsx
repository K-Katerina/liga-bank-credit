import React from 'react';
import PropTypes from 'prop-types';

const Button = ({nameButton = 'Кнопка', onClick, className, disabled}) => {

    return (
        <button onClick={(evt) => onClick(evt)}
                disabled={disabled}
                className={`button ${className}`}
                type="button">
                {nameButton}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    nameButton: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

export {Button};
