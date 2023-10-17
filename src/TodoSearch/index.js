import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

//function TodoSearch({ //aqui le aplicamos destructuracion {}
//    searchValue,
//    setSearchValue,
//}){
function TodoSearch() {
    const {
      searchValue,
      setSearchValue,
    } = React.useContext(TodoContext);
      

    return(
    <input 
    placeholder="cortar cebolla"
    className='TodoSearch' 
    value={searchValue}
    onChange={(event)=>{
         setSearchValue(event.target.value)
        //console.log(event)
        //console.log(event.target)
        //console.log(event.target.value)
    }}/>
    );
 }
 export {TodoSearch}