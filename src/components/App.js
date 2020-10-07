import React from 'react';
import BooksList from '../containers/BookList';
import BooksForm from '../containers/BookForm';
import NavBar from './Nav';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
