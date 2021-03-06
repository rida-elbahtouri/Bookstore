import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ book, handleRemoveBook }) => (
  <tr className="Lesson-Panel">
    <div className="book-info">
      <td className="book-cat">{book.category}</td>
      <td className="book-title">{book.title}</td>
      <div className="options">
        <td className="Remove comment remove-padding">Comments</td>

        <td className="Remove">
          <button
            className="Remove"
            type="button"
            onClick={() => handleRemoveBook(book)}
          >
            Remove
          </button>
        </td>

        <td className="Remove remove-padding">Edit</td>
      </div>
    </div>
    <div className="book-progress">
      <div className="circle" />
      <div className="percent-info">
        <span className="percentage">75%</span>
        <span className="Completed">Completed</span>
      </div>
    </div>
    <div className="udpateprogress">
      <p className="current-chap">current chapter</p>
      <p className="chapter-num">
        Chapter
        {book.id}
      </p>
      <button type="button">UPDATE PROGRESS</button>
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
