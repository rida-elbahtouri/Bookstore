import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BookList = ({ books }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book book={book} key={book.id} />
        ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({
  books: state.books,
});

const BookListConnect = connect(mapStateToProps)(BookList);

BookList.propTypes = {
  books: PropTypes.isRequired,
};

export default BookListConnect;
