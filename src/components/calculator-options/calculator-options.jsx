import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {CalculatorInputs} from '../calculator-inputs/calculator-inputs';
import {CalculatorSelect} from '../calculator-select/calculator-select';
import {InfoError} from '../info-block/info-block';
import {Suggest} from '../suggest/suggest';
import {
    changeCost,
    changeFee,
    changePeriod,
    changeUseCapital
} from '../../store/actions'

const CalculatorOptions = ({className, onSuggestButtonClick}) => {
    const dispatch = useDispatch();
    const cost = useSelector(state => state.cost);
    const target = useSelector(state => state.target);

    useEffect(() => {
        resetForm();
    }, [target]);

    const resetForm = () => {
        dispatch(changeCost(0));
        dispatch(changeFee(0));
        dispatch(changePeriod(1));
        dispatch(changeUseCapital(false));
    };

    return (
        <div className={`${className} calculator-options`}>
            <div className="calculator-options__left">
                <CalculatorSelect className="calculator-options__select"/>
                {target !== null &&
                    <CalculatorInputs className="calculator-options__inputs" />
                }
            </div>
            <div className="calculator-options__right">
                {target !== null &&
                    <>
                        {cost < 10
                            ? <InfoError className="calculator-options__error"/>
                            : <Suggest className="calculator-options__suggest" onClick={() => onSuggestButtonClick()}/>
                        }
                    </>
                }
            </div>
        </div>
    );
};

CalculatorOptions.propTypes = {
    className: PropTypes.string.isRequired,
};

export {CalculatorOptions};
