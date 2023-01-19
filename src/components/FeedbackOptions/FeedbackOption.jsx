import React from 'react';
import propTypes from 'prop-types';
import {Button, ButtonsList} from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <ButtonsList>
        {options.map((option, index) => {
            const text = option.slice(0, 1).toUpperCase() + option.slice(1);
            return <li key={option}>
                <Button type='button' onClick={() => onLeaveFeedback(index)}>
                    {text}
                </Button>
            </li>
        })}
    </ButtonsList>
}


FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};


export default FeedbackOptions;