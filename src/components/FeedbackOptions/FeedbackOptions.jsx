import React from 'react';
import { BtnContainer, MyBtn } from './styled';
import PropTypes from 'prop-types';

const btnOptions = {
  good: 'lightgreen',
  neutral: 'lightyellow',
  bad: 'tomato',
};
const btnsName = Object.keys(btnOptions);

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <BtnContainer>
      {btnsName.map(name => (
        <MyBtn
          key={btnsName.indexOf(name)}
          type="button"
          color={btnOptions[name]}
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
};

export default FeedbackOptions;
