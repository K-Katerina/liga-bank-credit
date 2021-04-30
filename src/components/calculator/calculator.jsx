import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {CalculatorOptions} from '../calculator-options/calculator-options';
import {SuccessModal} from '../success-modal/success-modal';
import {Summary} from '../summary/summary';
import {
    changeTarget,
} from '../../store/actions'

const Calculator = ({className}) => {
    const dispatch = useDispatch();

    const [isOpenForm, setIsOpenForm] = useState(false);
    const [successIsOpen, setSuccessIsOpen] = useState(false);

    const onSuggestButtonClick = () => {
        setIsOpenForm(true);
    };

    const onSubmitClick = () => {
        setSuccessIsOpen(true);
        setIsOpenForm(false);
        dispatch(changeTarget(null));
    };

    return (
        <section className={`${className} calculator wrapper`} id="calculator">
            <h2 className="calculator__title">Кредитный калькулятор</h2>
            <CalculatorOptions className="calculator__options" onSuggestButtonClick={() => onSuggestButtonClick()}/>
            {isOpenForm &&
            <Summary className="calculator__summary" onClick={() => onSubmitClick()}/>}
            {successIsOpen &&
            <SuccessModal className="calculator__success" changeVisibilitySuccess={(value) => setSuccessIsOpen(value)}/>}
        </section>
    );
};

Calculator.propTypes = {
    className: PropTypes.string.isRequired,
};

export {Calculator};
