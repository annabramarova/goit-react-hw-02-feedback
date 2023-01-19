import React from 'react';
import propTypes from 'prop-types';
import {Button, ButtonsList} from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    <ButtonsList>
        {options.map((option, index) => (
            <li key={option}>
                <Button type='button'onClick={() => onLeaveFeedback(index)}>
                    {option}
                </Button>
            </li>
        ))}
    </ButtonsList>
}

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};


export default FeedbackOptions;