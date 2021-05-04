import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {AutoCreditConsts, CreditTarget, MortgageConsts, STEP_FEE} from '../../const';
import {getWordForm, getWordFormWithValue} from '../../utils';
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

    const minCost = isAutoCredit ? AutoCreditConsts.MIN_COST : MortgageConsts.MIN_COST;
    const maxCost = isAutoCredit ? AutoCreditConsts.MAX_COST : MortgageConsts.MAX_COST;
    const minFee = isAutoCredit ? AutoCreditConsts.MIN_FEE : MortgageConsts.MIN_FEE;
    const maxFee = isAutoCredit ? AutoCreditConsts.MAX_FEE : MortgageConsts.MAX_FEE;
    const minPeriod = isAutoCredit ? AutoCreditConsts.MIN_PERIOD : MortgageConsts.MIN_PERIOD;
    const maxPeriod = isAutoCredit ? AutoCreditConsts.MAX_PERIOD : MortgageConsts.MAX_PERIOD;
    const stepCost = isAutoCredit ? AutoCreditConsts.STEP_COST : MortgageConsts.STEP_COST;

    const getPercentOfCost = (value) => Math.floor((value * 100) / cost);
    const getCostOfPercent = (percent, value = cost) => Math.floor((percent * value) / 100);

    const onCostChange = (value) => {
        dispatch(changeCost(value));
        dispatch(changeFee(getCostOfPercent(minFee, value)));
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
                                  min={minCost}
                                  max={maxCost}
                                  mask={getWordForm(fee, [' рубль', ' рубля', ' рублей'])}
                                  step={stepCost}
                                  onChange={(value) => onCostChange(value)}
                                  label={`Стоимость ${isAutoCredit ? 'автомобиля' : 'недвижимости'}`}
                                  sublabel={`От ${minCost.toLocaleString()} до ${maxCost.toLocaleString()} рублей`}/>

                <Range onChangeInput={(evt) => onFeeChange(evt.target.value)}
                       onChangeRange={(evt) => onFeeChange(getCostOfPercent(evt.target.value))}
                       className="calculator-inputs__range"
                       range={getPercentOfCost(fee)}
                       value={fee}
                       mask={getWordForm(fee, ['рубль', 'рубля', 'рублей'])}
                       min={minFee}
                       max={maxFee}
                       step={STEP_FEE}
                       label="Первоначальный взнос"
                       sublabel={`${getPercentOfCost(fee)}%`}/>

                <Range onChangeInput={(evt) => onPeriodChange(evt.target.value)}
                       onChangeRange={(evt) => onPeriodChange(evt.target.value)}
                       className="calculator-inputs__range"
                       value={period}
                       range={period}
                       min={minPeriod}
                       max={maxPeriod}
                       mask={getWordForm(period, ['год', 'года', 'лет'])}
                       label="Срок кредитования"
                       sublabel={<><span>{getWordFormWithValue(minPeriod, ['год', 'года', 'лет'])}</span><span>{getWordFormWithValue(maxPeriod, ['год', 'года', 'лет'])}</span></>}/>

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
