import React from 'react';
import propTypes from 'prop-types';
import { StatList, StatItem, Label } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <StatList>
        <StatItem> <p>Good: <Label> {good}</Label></p>
      </StatItem>
      <StatItem>
        <p>Neutral:<Label> {neutral}</Label></p>
      </StatItem>
      <StatItem>
        <p>Bad:<Label> {bad}</Label></p>
      </StatItem>
      <StatItem>
        <p>Total: <Label> {total}</Label></p>
      </StatItem>
      <StatItem>
            <p>Positive feedback: <Label>{positivePercentage}%</Label></p>
      </StatItem>
    </StatList>
);

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired
}

export default Statistics;