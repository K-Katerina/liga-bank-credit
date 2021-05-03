import React from 'react';
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
    changeUseCapital, changeUseComprehensiveCover, changeUseInsurance
} from '../../store/actions';

const CalculatorInputs = ({className}) => {
    const dispatch = useDispatch();
    const cost = useSelector(state => state.cost);
    const fee = useSelector(state => state.fee);
    const period = useSelector(state => state.period);
    const useCapital = useSelector(state => state.useCapital);
    const useComprehensiveCover = useSelector(state => state.useComprehensiveCover);
    const useInsurance = useSelector(state => state.useInsurance);
    const isAutoCredit = useSelector(state => state.target === CreditTarget.AUTO_CREDIT);

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

    const onUseInsurance = (value) => {
        dispatch(changeUseInsurance(value));
    };

    const onUseComprehensiveCover = (value) => {
        dispatch(changeUseComprehensiveCover(value));
    };

    return (
        <section className={`${className} calculator-inputs`}>
            <h3 className="calculator-inputs__parameter">Шаг 2. Введите параметры кредита</h3>
            <div className="calculator-inputs__subtitle">
                <InputWithButtons className="calculator-inputs__price"
                                  value={cost}
                                  onChange={(value) => onCostChange(value)}
                                  label={`Стоимость ${isAutoCredit ? 'автомобиля' : 'недвижимости'}`}
                                  sublabel={isAutoCredit ? 'От 500 000 до 5 000 000 рублей' : 'От 1 200 000 до 25 000 000 рублей'}/>

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

                {isAutoCredit
                    ? <>
                        <InputCheckbox className="calculator-inputs__comprehensive-cover" label="Оформить КАСКО в нашем банке" value={useComprehensiveCover} onChange={(value) => onUseComprehensiveCover(value)}/>
                        <InputCheckbox className="calculator-inputs__insurance" label="Оформить Страхование жизни в нашем банке" value={useInsurance} onChange={(value) => onUseInsurance(value)}/>
                    </>
                    : <InputCheckbox className="calculator-inputs__capital" label="Использовать материнский капитал" value={useCapital} onChange={(value) => onUseCapitalClick(value)}/>
                }
            </div>
        </section>
    );
};

CalculatorInputs.propTypes = {
    className: PropTypes.string.isRequired,
};

export {CalculatorInputs};
