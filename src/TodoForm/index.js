import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext); //aqui consumiremos el contexto, cogiendo las propiedades que necesitemos

    const [newTodoValue, setNewTodoValue] = React.useState('');// aqui creamos un estado local con su actualizador

    const onSubmit=(event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onCancel=()=>{
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
      };
  return (
    <form onSubmit={onSubmit}>
      <label>Esribe tu nuevo TODO</label>
      <textarea
        placeholder="Cortar cebolla para el almuerzo"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >Cancelar</button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };