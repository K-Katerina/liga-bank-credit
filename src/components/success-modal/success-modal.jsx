import PropTypes from 'prop-types';
import React from "react";
import {useDispatch} from 'react-redux';
import {changeVisibilitySuccess} from '../../store/actions';
import {InfoSuccess} from '../info-block/info-block';
import {Modal} from '../modal/modal';

const SuccessModal = ({className}) => {
    const dispatch = useDispatch();

    const closeForm = () => {
        dispatch(changeVisibilitySuccess(false));
    };

    return (
        <Modal closeModal={() => closeForm()}>
            <InfoSuccess className={className}/>
        </Modal>
    );
}

SuccessModal.propTypes = {
    className: PropTypes.string
};

export {SuccessModal};

