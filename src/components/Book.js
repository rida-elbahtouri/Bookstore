import React from "react";
import PropTypes from "prop-types";

const Books = ({ book, handleRemoveBook }) => (
  <tr className="Lesson-Panel">
    <div className="book-info">
      <td className="book-cat">{book.category}</td>
      <td className="book-title">{book.title}</td>
      <div className="options">
        <td className="Remove">Comments</td>
        <span className="line">|</span>
        <td className="Remove">
          <a href="#" onClick={() => handleRemoveBook(book)}>
            Remove
          </a>
        </td>
        <span className="line">|</span>

        <td className="Remove">Edit</td>
      </div>
    </div>
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
