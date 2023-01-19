import React from 'react';
import propTypes from 'prop-types';

const Notification = ({ message }) => <p>{message}</p>

Notification.propTypes = {
    message: propTypes.string.isRequired,
};

export default Notification;