import React from 'react';
import './NoteItem.styles.scss';

const NoteItem = ({ title, day, content, onItemClicked}) => {
  return (
    <div
      className="NoteItem__container"
      role="button"
      onClick={onItemClicked}
    >
      <h2>{title}</h2>
      <p>{day}</p>
      <p>{content}</p>
    </div>
  );
};

export default NoteItem;
