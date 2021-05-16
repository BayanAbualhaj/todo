import React from 'react';
import NavBar from "./components/todo/navBar";
import ToDo from './components/todo/todo.js';

const App =()=> {
    return (
      <>
        <NavBar/>
        <ToDo />
      </>
    );
}

export default App;
