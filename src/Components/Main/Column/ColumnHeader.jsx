import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownMenu from './../../Shared/DropdownMenu';
import Button from './../../Shared/Button';
import { useDispatch } from 'react-redux';
import { deleteColumn, setColumnTitle } from './../../../redux/kanbanSlice';

const Title = styled.h3`
  padding: 12px;
  font-size: 1.2rem;
`;
const RelativeContainer = styled.div`
  position: relative;
`;
const Input = styled.input`
  margin-left: 12px;
  font-size: 1.2rem;
  width: 160px;
  line-height: 21px;
  border: none;
`;

const ColumnHeader = ({ title, thisColId }) => {
  const dispatch = useDispatch();
  // editMode state for setting new column title
  const [editMode, setEditMode] = useState(title === '');
  const activateEditMode = () => setEditMode(true);
  // title state for title inpute onChange subscribe and setting value
  const [newTitle, setNewTitle] = useState(title);
  const onHandleChange = (e) => setNewTitle(e.currentTarget.value.substring(0, 18))
  // get newTitle from local state and dispath in store
  const updateColumnTitle = () => {
    dispatch(setColumnTitle({ newTitle: newTitle ? newTitle : 'New Column', columnId: thisColId }));
    setEditMode(false);
  }
  // data for dropdownMenu mapping
  const mappingData = [{ id: 'delete column', content: 'Delete Column' }, { id: 'rename column', content: 'Rename column' }];
  // state for toggling Button('...') | Dropdown('delete column', 'rename column')
  const [isDropdown, setIsDropdown] = useState(false);
  //get data from dropdownMenu and choose action
  const execDropdownCommand = data => {
    switch (data.id) {
      case 'delete column':
        dispatch(deleteColumn(thisColId));
        setIsDropdown(false);
        break;
      case 'rename column':
        activateEditMode();
        setIsDropdown(false);
        break;
      default: return;
    }
  }

  const onHandleKeyDown = (e) => {
    e.key === 'Enter' && updateColumnTitle();
    if (e.keyCode === 27) {
      updateColumnTitle();
      setEditMode(false);
    }
  }

  return (
    <>
      {editMode ?
        <Input autoFocus onBlur={updateColumnTitle} onKeyDown={onHandleKeyDown} onChange={onHandleChange} value={newTitle} name={title}/>
        : <Title onDoubleClick={activateEditMode} onTouchEnd={activateEditMode}>{title}</Title>}
      {isDropdown ?
        <RelativeContainer>
          <DropdownMenu
            mappingData={mappingData}
            onSubmit={execDropdownCommand}
            onHandleLeave={() => setIsDropdown(false)}
            right='-4%' top='15px' />
        </RelativeContainer>
        : <Button
          onHandleClick={() => setIsDropdown(true)}
          name={' ... '}
          clear
        />
      }
    </>
  )
}

export default ColumnHeader
