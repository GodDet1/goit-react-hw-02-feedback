import React from 'react';
import { Header, MySpan, SpanContainer } from './styled';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, positivePercentage }) {
  return (
    <SpanContainer>
      <MySpan>Good: {good}</MySpan>
      <MySpan>Neutral: {neutral}</MySpan>
      <MySpan>Bad: {bad}</MySpan>
      <Header>
        Positive feedback:{' '}
        {Number.isNaN(positivePercentage) ? 0 : positivePercentage} %
      </Header>
    </SpanContainer>
  );
}

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
