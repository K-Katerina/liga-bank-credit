import React from 'react';
import PropTypes from 'prop-types';

const InputCheckbox = ({className, value, onChange, label}) => {

    return (
        <label className={`${className} input-checkbox`}>
            <input
                onChange={(evt) => onChange(evt.target.value)}
                type="checkbox"
                value={value}/>
            <span>
                &nbsp;{label}
            </span>
        </label>
    );
};

InputCheckbox.propTypes = {
    className: PropTypes.string.isRequired,
};

export {InputCheckbox};
