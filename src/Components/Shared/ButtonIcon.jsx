import React from "react";
import styled from 'styled-components';

const Icon = styled.button`
  font-size: 2rem;
  padding: 0.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
`;

const ButtonIcon = ({ onHandleClick, disabled, className }) => {
  return (
    <Icon onClick={onHandleClick} disabled={disabled} className={className}/>
  )
}

export default ButtonIcon;