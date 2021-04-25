import React from 'react';
import PropTypes from 'prop-types';

const Select = ({options, onChange, title, className}) => {
    return (
        <select onChange={(evt) => onChange(evt)}
                className={`${className} select`}>
            <option value="none" hidden className="select__option select__option--title">{title}</option>
            {options.map((option) =>
                <option key={option} value={option} className="select__option">{option}</option>
            )}
        </select>
    );
};

Select.propTypes = {
    className: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    title: PropTypes.string
};

export {Select};
