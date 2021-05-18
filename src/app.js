import React from 'react';
import NavBar from "./components/todo/navBar";
import ToDo from './components/todo/todo.js';
import PaginationProvider from './components/context/pagination';
const App = () => {
  return (
    <>
      <NavBar />
      <PaginationProvider>
        <ToDo />
      </PaginationProvider>
    </>
  );
}

export default App;
