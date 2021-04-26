import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {getWordForm} from '../../utils';
import {InfoError} from '../info-block/info-block';
import {Input} from '../input/input';
import {Range} from '../range/range';
import {Select} from '../select/select';
import {Summary} from '../summary/summary';
import {Suggest} from '../suggest/suggest';
import {changeCost, changeFee, changePeriod, changeTarget, changeUseCapital} from '../../store/actions'

const Calculator = ({className}) => {
    const dispatch = useDispatch();
    const target = useSelector(state => state.target);
    const cost = useSelector(state => state.cost);
    const fee = useSelector(state => state.fee);
    const period = useSelector(state => state.period);
    const useCapital = useSelector(state => state.useCapital);
    const isCredit = useSelector(state => state.isCredit);

    const onTargetChange = (value) => {
        dispatch(changeTarget(value.includes('Авто')));
        // isCredit
    };

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

    const [isOpenForm, setIsOpenForm] = useState(false);

    const onSuggestButtonClick = () => {
        setIsOpenForm(!isOpenForm);
    };

    return (
        <section className={`${className} calculator wrapper`}>
            <h2 className="calculator__title">Кредитный калькулятор</h2>
            <div className="calculator__wrapper">
                <div className="calculator__left">
                    <h3 className="calculator__subtitle">Шаг 1. Цель кредита</h3>
                    <Select
                        className="calculator__select"
                        options={["Ипотечное кредитование", "Автомобильное кредитование"]}
                        title={"Выберите цель кредита"}
                        onChange={(evt) => onTargetChange(evt.target.value)}
                        value={target}
                    />
                    {isCredit !== null && <>
                    <h3 className="calculator__parameter">Шаг 2. Введите параметры кредита</h3>
                    <div className="calculator__subtitle">
                        <Input className="calculator__price"
                               value={cost}
                               onChange={(evt) => onCostChange(evt.target.value)}
                               label={`Стоимость ${isCredit ? 'автомобиля' : 'недвижимости'}`}
                               sublabel={isCredit ? 'От 500 000 до 5 000 000 рублей' : 'От 1 200 000 до 25 000 000 рублей'}/>

                        <Range onChange={(evt) => onFeeChange(evt.target.value)}
                               className="calculator__range"
                               value={fee}
                               min={1}
                               max={100}
                               label="Первоначальный взнос"
                               sublabel={`${fee} %`}/>

                        <Range onChange={(evt) => onPeriodChange(evt.target.value)}
                               className="calculator__range"
                               value={period}
                               min={5}
                               max={30}
                               label="Срок кредитования"
                               sublabel={getWordForm(period, ['год', 'года', 'лет'])}/>

                        <label className="calculator__capital">
                            <input
                                onChange={(evt) => onUseCapitalClick(evt.target.value)}
                                type="checkbox"
                                value={useCapital}/>
                            <span>
                                &nbsp;Использовать материнский капитал
                            </span>
                        </label>
                    </div>
                    </>}
                </div>
                <div className="calculator__right">
                    {isCredit !== null && <>
                        {cost < 10
                            ? <InfoError className="calculator__error"/>
                            : <Suggest className="calculator__suggest" onClick={() => onSuggestButtonClick(222)}/>
                        }
                    </>
                    }
                </div>
            </div>
            {isOpenForm &&
            <Summary className="calculator__summary" onClick={() => console.log(111)}/>}
        </section>
    );
};

Calculator.propTypes = {
    className: PropTypes.string.isRequired,
};

export {Calculator};
