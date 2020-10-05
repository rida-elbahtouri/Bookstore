import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ book }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

Books.propTypes = {
  book: PropTypes.isRequired,
};
export default Books;
