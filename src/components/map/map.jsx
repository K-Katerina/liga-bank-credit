import React from 'react';
import PropTypes from 'prop-types';

const Map = ({className}) => {
    return (
        <article className={`map ${className}`}>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Aef7bba2fdc66bc1bded0ccab5782a367d8d9e3f07ad6241f2a4f0a6c766bc398&amp;source=constructor"
                width="100%" height="462" frameBorder="0" title="Наши офисы уже есть в Москве, Казани, Саратове, Тюмени и Омске"/>
        </article>
    );
};

Map.propTypes = {
    className: PropTypes.string.isRequired
};

export {Map};
