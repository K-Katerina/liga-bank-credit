import React from 'react';
import PropTypes from 'prop-types';

const Select = ({options, onChange, title, className}) => {
    return (
        <select onChange={(evt) => onChange(evt)}
                className={`${className} select`}>
            <option value="none" hidden className="select__option select__option--title">{title}</option>
            {Object.keys(options).map((key) =>
                <option key={key} value={key} className="select__option">{options[key]}</option>
            )}
        </select>
    );
};

Select.propTypes = {
    className: PropTypes.string,
    options: PropTypes.object,
    onChange: PropTypes.func,
    title: PropTypes.string
};

export {Select};
