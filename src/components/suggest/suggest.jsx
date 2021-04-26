import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Button} from '../button/button';

const Suggest = ({className, onClick}) => {

    const isCredit = useSelector(state => state.isCredit);

    return (
        <section className={`suggest ${className}`}>
            <h3 className="suggest__subtitle">Наше предложение</h3>
            <div className="suggest__wrapper">
                <div className="suggest__top">
                    <p className="suggest__result">
                        1 330 000 рублей
                        <small className="suggest__desc">
                            Сумма {isCredit ? 'автокредита' : 'ипотеки'}
                        </small>
                    </p>
                    <p className="suggest__result">
                        9,40%
                        <small className="suggest__desc">
                            Процентная ставка
                        </small>
                    </p>
                </div>
                <div className="suggest__bottom">
                    <p className="suggest__result">
                        27 868 рублей
                        <small className="suggest__desc">
                            Ежемесячный платеж
                        </small>
                    </p>
                    <p className="suggest__result">
                        61 929 рублей
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
