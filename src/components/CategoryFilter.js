import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_FILTER } from '../actions/index';
const CategoryFilter = ({ filter }) => {
  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const handleFilterChange = (e) => {
    CHANGE_FILTER(e.target.value);
  };
  return (
    <div>
      <select name="category" onChange={handleFilterChange}>
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  CHANGE_FILTER: (book) => {
    dispatch(CHANGE_FILTER(book));
  },
});

export default connect(null, mapDispatchToProps)(CategoryFilter);
