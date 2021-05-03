import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {CreditTarget} from '../../const';
import {saveData} from '../../store/actions';
import {getWordForm} from '../../utils';
import {Button} from '../button/button';
import {Input} from '../input/input';

const Summary = ({className, onClick}) => {
    const data = useSelector(state => state.data);
    const isAutoCredit = data && data.target === CreditTarget.AUTO_CREDIT;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(saveData(1));
    }, []);

    if (!data) {
      return null;
    }

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
                    <span className="item__value">{isAutoCredit ? 'Автомобильное кредитование' : 'Ипотека'}</span>
                </li>
                <li className="summary__item list__item">
                    <span className="item__title">Стоимость {isAutoCredit ? 'автомобиля' : 'недвижимости'}</span>
                    <span className="item__value">{data.cost} рублей</span>
                </li>
                <li className="summary__item list__item">
                    <span className="item__title">Первоначальный взнос</span>
                    <span className="item__value">{data.fee} рублей</span>
                </li>
                <li className="summary__item list__item">
                    <span className="item__title">Срок кредитования</span>
                    <span className="item__value">{getWordForm(data.period, ['год', 'года', 'лет'])}</span>
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
