import React from 'react';
import { BtnContainer, MyBtn } from './styled';
import PropTypes from 'prop-types';

function FeedbackOptions({ onLeaveFeedback, options }) {
  const arrName = Object.keys(options);

  return (
    <BtnContainer>
      {arrName.map(name => (
        <MyBtn
          key={arrName.indexOf(name)}
          type="button"
          color={options[name]}
          name={name}
          onClick={onLeaveFeedback}
        >
          {name}
        </MyBtn>
      ))}
    </BtnContainer>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }),
};

export default FeedbackOptions;
