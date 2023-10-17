import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

//function TodoCounter({completed,total}){
    function TodoCounter() {
        const {
          completedTodos,
          totalTodos,
        } = React.useContext(TodoContext);
      
    return(
    <h1 className="TodoCounter">
    {/*Has completado <span>{completed}</span> de <span>{total}</span> TODOs*/}
    Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</h1>
    );
 }

 export { TodoCounter}