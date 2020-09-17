import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoteItem from './NoteItem';
import inputActions from '../redux/actions/inputActions';
import './NotesSection.style.scss';

const NotesSection = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes)

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputContent(item.content));
    dispatch(inputActions.setInputDay(item.day));
  }

  if(notes.length === 0) {
    return (
      <div className="NotesSection__container__empty">
        <p>Hoje você está sem tarefas pendentes divirta-se.</p>
      </div>  
    )
  }

  return (
    <div className="NotesSection__container">
      {notes.map((item, index) => {
        if(item) {
          return (
            <NoteItem
              title={item.title}
              day={item.day}
              content={item.content}
              onItemClicked={() => {
                onItemClicked(item, index);
              }}
            />      
          )
        }
        return null;
      })}
    </div>
  );
};

export default NotesSection;
