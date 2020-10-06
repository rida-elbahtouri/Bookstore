import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({ books, filter, REMOVE_BOOK }) => {
  const handleRemoveBook = book => {
    REMOVE_BOOK(book);
  };
  let booksfiltered = books;
  if (filter === 'All') {
    booksfiltered = books;
  } else {
    booksfiltered = books.filter(book => book.category === filter);
  }

  return (
    <div>
      <CategoryFilter />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {booksfiltered.map(book => (
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
});

const BookListConnect = connect(mapStateToProps, mapDispatchToProps)(BookList);

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  REMOVE_BOOK: PropTypes.func.isRequired,
  filter: PropTypes.isRequired,
};

export default BookListConnect;
