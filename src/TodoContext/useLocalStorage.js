import React from "react";

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');
function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
      setTimeout(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName);//este itemNme viene a ser el TODOS_V1 o el nombre que le pongamos

    //let parsedTodos;
        let parsedItem;// estamos haciendo el uso de localStorage mas generico osea para seguir usndolo

 //if (!localStorageTodos) {
   //localStorage.setItem('TODOS_V1', JSON.stringify([]));
   //parsedTodos = [];
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
       } else {
         //parsedTodos = JSON.parse(localStorageTodos);
         parsedItem = JSON.parse(localStorageItem);
         setItem(parsedItem);
      }
          setLoading(false);
        } catch(error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);
    });
     //const [todos, setTodos] = React.useState(parsedTodos);
     // const [item, setItem] = React.useState(parsedItem);

      const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      };

  return {item,
     saveItem,
     loading,
     error,
   };
}

export {useLocalStorage};

//const defaultTodos = [
  //{ text: 'Cortar cebolla', completed: true },
  ////{ text: 'Tomar el Curso de Intro a React.js', completed: false },
  ////{ text: 'Llorar con la Llorona', completed: true },
  ////{ text: 'LALALALALA', completed: false },
  ////{ text: 'Usar estados derivados', completed: true },
//];

//function App() {
 // const [todos, setTodos] = React.useState(defaultTodos);
 //const localStorageTodos = localStorage.getItem('TODOS_V1');