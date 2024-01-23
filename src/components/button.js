import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
 background-color: #E5E7EB;
 color: white;
 padding: 4px 20px;
 border-radius: 12px;
 border: none;
 cursor: default;
 opacity: 0.6;
 height: 28px;
 line-height: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 margin: auto;
`;

const Button = ({ children }) => {
 return (
  <StyledButton disabled>
    {children}
  </StyledButton>
 );
};

export default Button;