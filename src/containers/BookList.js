import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Book from "../components/Book";
import { REMOVE_BOOK } from "../actions/index";

const BookList = ({ books, REMOVE_BOOK }) => {
  const handleRemoveBook = (book) => {
    REMOVE_BOOK(book);
  };

  return (
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
          {books.map((book) => (
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

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => {
  return {
    REMOVE_BOOK: (book) => {
      dispatch(REMOVE_BOOK(book));
    },
  };
};

const BookListConnect = connect(mapStateToProps, mapDispatchToProps)(BookList);

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default BookListConnect;
