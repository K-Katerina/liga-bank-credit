import React from 'react';
import PropTypes from 'prop-types';

const Select = ({options, onChange, value, className}) => {
    return (
        <select value={value}
                onChange={(evt) => onChange(evt)}
                className={`${className} select`}>
            {options.map((option) =>
                <option key={option} value={option}>{option}</option>
            )}
        </select>
    );
};

Select.propTypes = {
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    value: PropTypes.string
};

export {Select};
