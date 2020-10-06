import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ book, handleRemoveBook }) => (
  <tr className="Lesson-Panel">
    <td className="book-cat">{book.category}</td>
    <td className="book-title">{book.title}</td>

    <td className="Remove">Comments |</td>
    <td className="Remove">
      <a href="#" onClick={() => handleRemoveBook(book)}>
        Remove
      </a>
    </td>

    <td className="Remove">| Edit</td>
  </tr>
);

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
export default Books;
