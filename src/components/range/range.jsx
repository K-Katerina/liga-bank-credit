import React from 'react';
import PropTypes from 'prop-types';
import {Input} from '../input/input';

const Range = ({className, label, sublabel, onChange, value, max, min, step = 1}) => {

    return (
        <div className={`${className} range`}>
            <Input className="range__input"
                   label={label}
                   onChange={(evt) => onChange(evt)}
                   value={value} />
            <input className="range__slider"
                   type="range"
                   onChange={(evt) => onChange(evt)}
                   step={step}
                   value={value}
                   max={max}
                   min={min} />
            <span className="range__sublabel">
              {sublabel}
            </span>
        </div>
    );
};

Range.propTypes = {
    className: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    sublabel: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number
};

export {Range};
