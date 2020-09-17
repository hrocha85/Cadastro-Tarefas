import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noteActions from '../redux/actions/noteActions';
import inputActions from '../redux/actions/inputActions';
import './inputSection.style.scss';

const InputSection = () => {
  const id = useSelector(state => state.inputs.id);
  const title = useSelector(state => state.inputs.title);
  const content = useSelector(state => state.inputs.content);
  const day = useSelector(state => state.inputs.day)
  const dispatch = useDispatch();

  const addNote = () => {
    if(title && content && day) {
      dispatch(noteActions.addNote({
        title,day,
        content
        
      }))
      dispatch(inputActions.resetInputs())
    }
  }

  const updateNote = () => {
    if(title && content && day) {
      dispatch(noteActions.updateNote(id, {
        title, day,
        content
      }))
      dispatch(inputActions.resetInputs())
    }    
  }

  const deleteNote = () => {
    dispatch(noteActions.deleteNote(id))
    dispatch(inputActions.resetInputs())
  }

  return (
    <div className="InputSection__container">
      <h1>Cadastre abaixo suas tarefas</h1>
      <p>para <span className="text-warning"> Atualizar </span> ou <span className="text-danger">excluir</span>  clique sobre a terefa que deseja alterar</p>
      <input
        type="text"
        placeholder="Nome da Terefa"
        value={title}
        onChange={e => 
          dispatch(inputActions.setInputTitle(e.target.value))
        }
      />
      <label>Data da tarefa </label>
      <input
        type="date"
        placeholder="Data da tarefa"
        value={day}
        onChange={e => 
          dispatch(inputActions.setInputDay(e.target.value))
        }
      />
      <textarea
        placeholder="O que deve ser feito?"
        type="text"
        value={content}
        onChange={e => 
          dispatch(inputActions.setInputContent(e.target.value))
        }
      ></textarea>
      <div
        className="InputSection__container__btnWrapper"
      >
        <button
          onClick={id === -1 ? addNote : updateNote}
        >
          {id === -1 ? "Adicinar Tarefa " : "Atualizar Tarefa"}
        </button>      
        {id !== -1 &&
          <button
            onClick={deleteNote}
            style={{ marginLeft: '1em', backgroundColor: 'red' }}
          >
            Excluir
          </button>
           }
       </div>
    </div>
  );
};

export default InputSection;
