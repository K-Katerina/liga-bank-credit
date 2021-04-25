import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <label className={`${props.className} input`}>
            <span className="input__label">
              {props.label}
            </span>
            <input {...props} className="input__text" type="number"/>
            <span className="input__sublabel">
              {props.sublabel}
            </span>
        </label>
    );
};

Input.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.number,
    label: PropTypes.string
};

export {Input};
