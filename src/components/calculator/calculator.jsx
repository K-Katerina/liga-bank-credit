import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {saveUserDataToLocalStorage} from '../../thunks';
import {CalculatorOptions} from '../calculator-options/calculator-options';
import {SuccessModal} from '../success-modal/success-modal';
import {Summary} from '../summary/summary';
import {
    changeTarget, saveData,
} from '../../store/actions';

const Calculator = ({className}) => {
    const dispatch = useDispatch();

    const [isOpenForm, setIsOpenForm] = useState(false);
    const [successIsOpen, setSuccessIsOpen] = useState(false);

    const cost = useSelector(state => state.cost);
    const fee = useSelector(state => state.fee);
    const period = useSelector(state => state.period);
    const data = useSelector(state => state.data);
    const target = useSelector(state => state.target);

    const onSuggestButtonClick = () => {
        dispatch(saveData({
            count: data.count + 1,
            target: target,
            cost: cost,
            fee: fee,
            period: period,
        }));
        setIsOpenForm(true);
    };

    const onSubmitClick = ({name, phone, email}) => {
        dispatch(saveData({
            count: data.count + 1
        }));
        dispatch(saveUserDataToLocalStorage({name, phone, email}));

        setSuccessIsOpen(true);
        setIsOpenForm(false);
        dispatch(changeTarget(null));
    };

    return (
        <section className={`${className} calculator wrapper`} id="calculator">
            <h2 className="calculator__title">Кредитный калькулятор</h2>
            <CalculatorOptions className="calculator__options" onSuggestButtonClick={() => onSuggestButtonClick()}/>
            {isOpenForm &&
            <Summary className="calculator__summary" onClick={(userData) => onSubmitClick(userData)}/>}
            {successIsOpen &&
            <SuccessModal className="calculator__success" changeVisibilitySuccess={(value) => setSuccessIsOpen(value)}/>}
        </section>
    );
};

Calculator.propTypes = {
    className: PropTypes.string.isRequired,
};

export {Calculator};
