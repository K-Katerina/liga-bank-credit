import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Button} from '../button/button';
import {Input} from '../input/input';

const Summary = ({className, onClick}) => {
    const isCredit = useSelector(state => state.isCredit);

    return (
        <section className={`summary ${className}`}>
            <h3 className="summary__subtitle">Шаг 3. Оформление заявки</h3>
            <ul className="summary__list">
                <li className="summary__item list__item">
                    <span className="item__title">Номер заявки</span>
                    <span className="item__value">№ 0010</span>
                </li>
                <li className="summary__item list__item">
                    <span className="item__title">Цель кредита</span>
                    <span className="item__value">{isCredit ? 'Автомобильное кредитование' : 'Ипотека'}</span>
                </li>
                <li className="summary__item list__item">
                    <span className="item__title">Стоимость {isCredit ? 'автомобиля' : 'недвижимости'}</span>
                    <span className="item__value">2 000 000 рублей</span>
                </li>
                <li className="summary__item list__item">
                    <span className="item__title">Первоначальный взнос</span>
                    <span className="item__value">200 000 рублей</span>
                </li>
                <li className="summary__item list__item">
                    <span className="item__title">Срок кредитования</span>
                    <span className="item__value">5 лет</span>
                </li>
            </ul>
            <Input className="summary__input" onChange={() => console.log()} autoFocus placeholder="ФИО" type="string"/>
            <div className="summary__group">
                <Input className="summary__input" onChange={() => console.log()} placeholder="Телефон" type="tel"/>
                <Input className="summary__input" onChange={() => console.log()} placeholder="E-mail" type="email"/>
            </div>
            <Button className="summary__submit" nameButton="Отправить" onClick={() => onClick()}/>

        </section>
    );
};

Summary.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isCredit: PropTypes.bool
};

export {Summary};
