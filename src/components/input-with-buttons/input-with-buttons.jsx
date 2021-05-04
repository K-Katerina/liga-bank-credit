import React from 'react';
import PropTypes from 'prop-types';
import {Input} from '../input/input';

const NamesButton = {
    PLUS: 'PLUS',
    MINUS: 'MINUS',
};

const InputWithButtons = ({className, onChange, step, value, ...rest}) => {

    const onValueChange = (target) => {
        switch (target) {
            case NamesButton.MINUS:
                return onChange(Number(value) - step);
            case NamesButton.PLUS:
                return onChange(Number(value) + step);
            default:
                return onChange(target);
        }
    };

    return (
        <div className={`${className} input-with-buttons`}>
            <button onClick={(evt) => onValueChange(evt.target.name)} className="input-with-buttons__button input-with-buttons__button--minus" name={NamesButton.MINUS}>−</button>
            <button onClick={(evt) => onValueChange(evt.target.name)} className="input-with-buttons__button input-with-buttons__button--plus" name={NamesButton.PLUS}>+</button>
            <Input value={value} onChange={(evt) => onValueChange(evt.target.value)} className="input-with-buttons__input" {...rest}/>
        </div>
    );
};

InputWithButtons.propTypes = {
    className: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    step: PropTypes.number
};

export {InputWithButtons};
