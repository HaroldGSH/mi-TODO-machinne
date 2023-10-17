import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoButton } from '../TodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';

function AppUI(){
  const {loading, error, completeTodo, searchedTodos, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext);
  //loading,
  //error,
  //completedTodos,
  //totalTodos,
  //searchValue,
  //setSearchValue,
  //searchedTodos,
  //completeTodo,
  //deleteTodo,
//} {
return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
     {/* {loading && <p>Estamos cargando...</p>}
      {error && <p>Desespérate, hubo un error!!</p>}
      {(!loading && searchedTodos.length === 0) && <p>¡Crea tu primer TODO!</p>} */}
       {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
        {/*<TodoItem/>
        <TodoItem/>
         <TodoItem/>*/ }
      </TodoList>
      
      <TodoButton setOpenModal={setOpenModal}/>
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
    </>
  );
}


export {AppUI};