import React from 'react';
import { useTodos } from './useTodos';
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
import { ChangeAlert } from '../ChangeAlert';

function App() { 
  const {state, stateUpdaters }= useTodos();

  const {
    loading, 
    error, 
    completeTodo, 
    searchedTodos, 
    openModal,
    totalTodos, 
    searchValue,
  } = state;
  const {
    setOpenModal,
    completedTodos,
    setSearchValue,
    addTodo,
    deleteTodo,
    sincronizeTodos,
  } = stateUpdaters;
  
  return(
    <>
     <TodoHeader>
      <TodoCounter 
       totalTodos = {totalTodos}
       completedTodos={completedTodos}
       loading={loading}
       />
 
       <TodoSearch 
       searchValue ={searchValue}
       setSearchValue={setSearchValue}
       loading={loading}
       />
     </TodoHeader>
      
      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
       // render={todo => (
       //   <TodoItem
       //     key={todo.text}
       //     text={todo.text}
       //     completed={todo.completed}
       //     onComplete={() => completeTodo(todo.text)}
       //     onDelete={() => deleteTodo(todo.text)}
       //   />
       // )}
       >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
    
      <TodoButton setOpenModal={setOpenModal}/>
      {openModal && (
        <Modal>
          <TodoForm
          addTodo={addTodo}
          setOpenModal={setOpenModal}/>
        </Modal>
      )}
      <ChangeAlert
        sincronize = {sincronizeTodos}
      />
    </>
   );
  }
  export default App;
