import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonWrapper } from "./Buttons.styled";

const Buttons = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map((option, index) => (
        <Button key={index} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </ButtonWrapper>
  );
};
Buttons.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};
export default Buttons;
