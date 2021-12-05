import React from "react";
import styled from "styled-components";

const Button = ({ text }) => {
  const StyledButton = styled.button`
    width: 13rem;
    height: 5rem;
    border-radius: 1.15rem;
    background: var(--dark1);
    color: var(--white);
    font-family: var(--text);
  `;

  return <StyledButton>{text}</StyledButton>;
};

export default Button;
