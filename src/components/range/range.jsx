import React from 'react';
import PropTypes from 'prop-types';
import {Input} from '../input/input';

const Range = ({className, label, sublabel, onChangeInput, onChangeRange, value, max, min, step = 1, range}) => {

    return (
        <div className={`${className} range`}>
            <Input className="range__input"
                   label={label}
                   onChange={(evt) => onChangeInput(evt)}
                   value={value} />
            <input className="range__slider"
                   type="range"
                   onChange={(evt) => onChangeRange(evt)}
                   step={step}
                   value={range}
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
    onChangeInput: PropTypes.func,
    onChangeRange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    sublabel: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    range: PropTypes.number
};

export {Range};
