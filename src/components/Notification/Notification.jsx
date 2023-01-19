import React from 'react';
import propTypes from 'prop-types';
import {NotificationP} from './Notification.styled'

const Notification = ({ message }) => <NotificationP>{message}</NotificationP>

Notification.propTypes = {
    message: propTypes.string.isRequired,
};

export default Notification;