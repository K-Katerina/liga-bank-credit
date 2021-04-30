import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {CreditTarget} from '../../const';
import {getWordForm} from '../../utils';
import {InputCheckbox} from '../input-checkbox/input-checkbox';
import {InputWithButtons} from '../input-with-buttons/input-with-buttons';
import {Range} from '../range/range';
import {
    changeCost,
    changeFee,
    changePeriod,
    changeUseCapital
} from '../../store/actions'

const CalculatorInputs = ({className}) => {
    const dispatch = useDispatch();
    const cost = useSelector(state => state.cost);
    const fee = useSelector(state => state.fee);
    const period = useSelector(state => state.period);
    const useCapital = useSelector(state => state.useCapital);
    const target = useSelector(state => state.target);
    const [isCredit, setIsCredit] = useState(target === CreditTarget.AUTO_CREDIT);

    useEffect(() => {
        setIsCredit(target === CreditTarget.AUTO_CREDIT);
    }, [target]);

    const onCostChange = (value) => {
        dispatch(changeCost(value));
    };

    const onFeeChange = (value) => {
        dispatch(changeFee(value));
    };

    const onPeriodChange = (value) => {
        dispatch(changePeriod(value));
    };

    const onUseCapitalClick = (value) => {
        dispatch(changeUseCapital(value));
    };

    return (
        <section className={`${className} calculator-inputs`}>
            <h3 className="calculator-inputs__parameter">Шаг 2. Введите параметры кредита</h3>
            <div className="calculator-inputs__subtitle">
                <InputWithButtons className="calculator-inputs__price"
                                  value={cost}
                                  onChange={(value) => onCostChange(value)}
                                  label={`Стоимость ${isCredit ? 'автомобиля' : 'недвижимости'}`}
                                  sublabel={isCredit ? 'От 500 000 до 5 000 000 рублей' : 'От 1 200 000 до 25 000 000 рублей'}/>

                <Range onChange={(evt) => onFeeChange(evt.target.value)}
                       className="calculator-inputs__range"
                       value={fee}
                       min={1}
                       max={100}
                       label="Первоначальный взнос"
                       sublabel={`${fee} %`}/>

                <Range onChange={(evt) => onPeriodChange(evt.target.value)}
                       className="calculator-inputs__range"
                       value={period}
                       min={5}
                       max={30}
                       label="Срок кредитования"
                       sublabel={getWordForm(period, ['год', 'года', 'лет'])}/>

                <InputCheckbox className="calculator-inputs__capital" label="Использовать материнский капитал" value={useCapital} onChange={(value) => onUseCapitalClick(value)}/>

            </div>
        </section>
    );
};

CalculatorInputs.propTypes = {
    className: PropTypes.string.isRequired,
};

export {CalculatorInputs};
