import React from 'react';
import PropTypes from 'prop-types';
import man from './man.png';
import main from './main.png';
import woman from './woman.png';

const Preview = ({className, title, subtitle, button, img, isLight}) => {
    return (
        <section className={`${className} preview ${isLight && 'preview--light'}`}>
            <div className="preview__left">
                <h1 className={`preview__title ${isLight && 'preview__title--light'}`}>
                    {title}
                    <span className={`preview__subtitle`}>{subtitle}</span>
                </h1>
                {button && <a href={button.href} className={`preview__button ${isLight && 'preview__button--light'}`}>{button.title}</a>}
            </div>
            <div className="preview__right">
                <img className="preview__img"
                     src={img.src}
                     alt={img.alt}
                />
            </div>
        </section>
    );
};

const Child0 = ({className}) => <Preview className={className}
                                         title="Лига Банк"
                                         subtitle="Кредиты на любой случай"
                                         isLight={true}
                                         button={{
                                           title: "Рассчитать кредит",
                                           href: "/",
                                         }}
                                         img={{
                                           alt: "Пример белой карты клиента нашего банка",
                                           src: main
                                         }}/>;

const Child1 = ({className}) => <Preview className={className}
                                         title="Лига Банк"
                                         subtitle="Ваша уверенность в&nbsp;завтрашнем дне"
                                         isLight={false}
                                         img={{
                                           alt: "Пример белой карты клиента нашего банка",
                                           src: man
                                         }}/>;

const Child2 = ({className}) => <Preview className={className}
                                         title="Лига Банк"
                                         subtitle="Всегда рядом"
                                         isLight={false}
                                         button={{
                                             title: "Найти отделение",
                                             href: "/"
                                         }}
                                         img={{
                                           alt: "Найти отделение",
                                           src: woman
                                         }}/>;

Preview.propTypes = {
    className: PropTypes.string
};

export {Child0, Child1, Child2};
