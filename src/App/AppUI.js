import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoHeader } from '../TodoHeader';
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


function AppUI(){
  const {
    loading, 
    error, 
    completeTodo, 
    searchedTodos, 
    deleteTodo, 
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue,
    setSearchValue} = React.useContext(TodoContext);
  
return (
    <>
     <TodoHeader>
      <TodoCounter 
       totalTodos = {totalTodos}
       completedTodos={completedTodos}/>
 
       <TodoSearch 
       searchValue ={searchValue}
       setSearchValue={setSearchValue}/>
     </TodoHeader>
      
      <TodoList>
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