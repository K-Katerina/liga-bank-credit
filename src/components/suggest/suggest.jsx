import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {AutoCreditConsts, CreditTarget, MortgageConsts, MOUNTS_IN_YEAR, PART_PAYMENT_OF_INCOME} from '../../const';
import {getWordForm} from '../../utils';
import {Button} from '../button/button';

const Suggest = ({className, onClick}) => {

    const isAutoCredit = useSelector(state => state.target === CreditTarget.AUTO_CREDIT);
    const creditSum = useSelector(state => state.cost - state.fee - MortgageConsts.PARENT_CAPITAL * (state.useCapital && state.target === CreditTarget.MORTGAGE));
    const cost = useSelector(state => state.cost);
    const fee = useSelector(state => state.fee);
    const useComprehensiveCover = useSelector(state => state.useComprehensiveCover);
    const useInsurance = useSelector(state => state.useInsurance);
    const period = useSelector(state => state.period);


    const getPercents = () => {
        let percent = AutoCreditConsts.MAX_INTEREST_RATE;
        if (isAutoCredit) {
            if (cost >= AutoCreditConsts.MONEY_BORDER) {
                percent = AutoCreditConsts.MIN_INTEREST_RATE;
            }
            if (useComprehensiveCover || useInsurance) {
                percent = AutoCreditConsts.MAX_INTEREST_RATE_ADD;
            }
            if (useComprehensiveCover && useInsurance) {
                percent = AutoCreditConsts.MIN_INTEREST_RATE_ALL_ADD;
            }
            // - До 2 000 000 рублей - 16%
            // - 2 000 000 рублей и выше - 15%
            // - При оформление КАСКО или страхования жизни - 8,5%
            // - При оформлении КАСКО и страхования жизни - 3,5%
        }
        else {
            if (fee * 100 < MortgageConsts.PERCENT_FEE_OF_COST_BORDER * cost) {
                percent = MortgageConsts.MAX_INTEREST_RATE;
            } else {
                percent = MortgageConsts.MIN_INTEREST_RATE;
            }
            // - Первоначальный взнос до 15%, процентная ставка - 9,40%
            // - Первоначальный взнос 15% и выше, процентная ставка - 8,50%
        }
        return percent;
    };

    const getMonthlyPayment = () => {
        const interestRate = (getPercents() / 100) / 12;
        return Math.floor(cost * (interestRate + (interestRate/(Math.pow(1 + interestRate,period * MOUNTS_IN_YEAR) - 1))));
    };

    const getRequiredIncome = () => {
        return Math.floor(getMonthlyPayment() * 100 / PART_PAYMENT_OF_INCOME);
    };


    return (
        <section className={`suggest ${className}`}>
            <h3 className="suggest__subtitle">Наше предложение</h3>
            <div className="suggest__wrapper">
                <div className="suggest__top">
                    <p className="suggest__result">
                        {creditSum.toLocaleString()} рублей
                        <small className="suggest__desc">
                            Сумма {isAutoCredit ? 'автокредита' : 'ипотеки'}
                        </small>
                    </p>
                    <p className="suggest__result">
                        {getPercents()}%
                        <small className="suggest__desc">
                            Процентная ставка
                        </small>
                    </p>
                </div>
                <div className="suggest__bottom">
                    <p className="suggest__result">
                        {getWordForm(getMonthlyPayment(), ['рубль', 'рубля', 'рублей'])}
                        <small className="suggest__desc">
                            Ежемесячный платеж
                        </small>
                    </p>
                    <p className="suggest__result">
                        {getWordForm(getRequiredIncome(), ['рубль', 'рубля', 'рублей'])}
                        <small className="suggest__desc">
                            Необходимый доход
                        </small>
                    </p>
                </div>
            </div>
            <Button className="suggest__button" nameButton="Оформить заявку" onClick={() => onClick()}/>
        </section>
    );
};

Suggest.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export {Suggest};
