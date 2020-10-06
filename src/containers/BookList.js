import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({
  books, filter, REMOVE_BOOK, CHANGE_FILTER,
}) => {
  const handleRemoveBook = book => {
    REMOVE_BOOK(book);
  };
  let booksfiltered = books;
  if (filter === 'All') {
    booksfiltered = books;
  } else {
    booksfiltered = books.filter(book => book.category === filter);
  }
  const handleFilterChange = e => {
    CHANGE_FILTER(e.target.value);
  };
  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table className="book-table">
        
        <tbody >
          {booksfiltered.map((book) => (
            <Book
              
              book={book}
              key={book.id}
              handleRemoveBook={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});
const mapDispatchToProps = dispatch => ({
  REMOVE_BOOK: book => {
    dispatch(REMOVE_BOOK(book));
  },
  CHANGE_FILTER: fl => {
    dispatch(CHANGE_FILTER(fl));
  },
});

const BookListConnect = connect(mapStateToProps, mapDispatchToProps)(BookList);

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  REMOVE_BOOK: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  CHANGE_FILTER: PropTypes.func.isRequired,
};

export default BookListConnect;
