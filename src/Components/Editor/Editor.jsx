import React from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';
import ButtonIcon from '../Shared/ButtonIcon';
import Button from './../Shared/Button';
import StepsInnerList from './StepsInnerList';

// styling
const Wrapper = styled.div`
  background-color: #0079BF;
  width: 100%;
  min-width: 320px;
  flex: 1;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  border: 1px solid lightgrey;
  width: 100%;
  height: 100%;
  background-color: #EBECF0;
  border-radius: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 5% 10px 5%;
`;
const TitleWrapper = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  padding-left: 10px;
`;
const Input = styled.input`
  line-height: 1.4rem;
  font-size: 1.3rem;
  padding-left: 10px;
  border: none;
`;
const Created = styled.h4`
  margin-top: 12px;
  font-weight: 400;
  font-size: 0.8rem;
  padding-left: 10px;
`;
const ButtonsWrapper = styled.div`
  border: ${props => props.width > 780 ? '1px solid grey' : 'none'};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 40%;
  padding: 0.5rem;
`;
const Editarea = styled.div`
  width: 95%;
  flex: 1;
  margin: 20px auto;
  padding: 20px 30px;
  font-size: 22px;
  display: block;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: white;
  overflow-y: auto;
`;

const Editor = ({ updateTaskTitle, onInputHandleChange, activateEditMode, createNewStep, deleteThisTask, closeEditPage,
  editMode, created, newTitle, title, stepIds, taskId }) => {
  const width = useWindowSize()[0];
  const onEnterDown = (e) => e.key === 'Enter' && updateTaskTitle();

  return (
    <Wrapper>
      <Container>
        <Header>
          <TitleWrapper>
            {editMode ?
              <Input autoFocus onBlur={updateTaskTitle} onKeyDown={onEnterDown} onChange={onInputHandleChange} value={newTitle} name='title' />
              : <Title onDoubleClick={activateEditMode} onTouchEnd={activateEditMode}>{title}</Title>
            }
            {created && <Created>{created}</Created>}
          </TitleWrapper>
          <ButtonsWrapper width={width}>
            {width > 780 ?
              <Button onHandleClick={createNewStep} name='Add step' clear />
              : <ButtonIcon onHandleClick={createNewStep} className="far fa-calendar-plus" />}
            {width > 780 ?
              <Button onHandleClick={deleteThisTask} name='Delete task' clear />
              : <ButtonIcon onHandleClick={deleteThisTask} className="far fa-trash-alt" />}
            {width > 780 ?
              <Button onHandleClick={closeEditPage} name='Close edit' clear />
              : <ButtonIcon onHandleClick={closeEditPage} className="far fa-window-close" />}
          </ButtonsWrapper>
        </Header>
        <Editarea>
          <StepsInnerList stepIds={stepIds} taskId={taskId} />
        </Editarea>
      </Container>
    </Wrapper>
  )
}

export default Editor;
