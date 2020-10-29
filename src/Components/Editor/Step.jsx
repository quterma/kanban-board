import React from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';
import ButtonIcon from '../Shared/ButtonIcon';
import Button from './../Shared/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 6px;
`;
const InputsWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const CheckboxContainer = styled.div`
  height: 2rem;
`;
const InputContainer = styled.div`
  height: 2rem;;
  width: 100%;
  padding-left: 10px;
`;
const CheckBox = styled.input`
  -ms-transform: scale(1.3); /* IE */
  -moz-transform: scale(1.3); /* FF */
  -webkit-transform: scale(1.3); /* Safari and Chrome */
  -o-transform: scale(1.3); /* Opera */
  transform: scale(1.3);
  margin: 0;
  height: 100%;
`;
const Content = styled.p`
  font-size: 1.2rem;
  height: 100%;
  margin: 0;
  padding: 0;
  text-decoration: ${props => props.isCompleted && 'line-through #0000ffa9'};
`;
const Input = styled.input`
  width: 100%;
  flex: 1;
  height: 100%;
  padding: 0;
  font-size: 1.2rem;
  border: none;
  margin: 0;
  text-decoration: underline;
`;

const Step = ({ onHandleToggle, updateThisStep, onHandleChange, activateEditMode,
  deleteThisStep, newContent, isCompleted, content, editMode }) => {
  const width = useWindowSize()[0];
  const onEnterDown = (e) => e.key === 'Enter' && updateThisStep();

  return (
    <Container>
      <InputsWrapper>
        <CheckboxContainer>
          <CheckBox type='checkbox' onChange={onHandleToggle} name='checkbox' checked={isCompleted}/>
        </CheckboxContainer>
        <InputContainer>
          {editMode ?
          <Input autoFocus onBlur={updateThisStep} onKeyDown={onEnterDown} onChange={onHandleChange} value={newContent} name='content' />
            : <Content onDoubleClick={activateEditMode} onTouchEnd={activateEditMode} isCompleted={isCompleted}>{content}</Content>
          }
        </InputContainer>
      </InputsWrapper>
      {width > 780 ?
        <Button onHandleClick={deleteThisStep} name='Delete step' clear dark />
        : <ButtonIcon onHandleClick={deleteThisStep} className='far fa-trash-alt'/>}
    </Container>
  )
}

export default Step
