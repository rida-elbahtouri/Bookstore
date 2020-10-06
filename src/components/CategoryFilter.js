import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CHANGE_FILTER } from '../actions/index';

const CategoryFilter = ({ CHANGE_FILTER }) => {
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
  const handleFilterChange = e => {
    CHANGE_FILTER(e.target.value);
  };
  return (
    <div className="categories-div">
      <select
        className="categories-filter"
        name="category"
        onChange={handleFilterChange}
      >
        {categories.map((cat) => (
          <option key={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  CHANGE_FILTER: book => {
    dispatch(CHANGE_FILTER(book));
  },
});

CategoryFilter.propTypes = {
  CHANGE_FILTER: PropTypes.func.isRequired,

};

export default connect(null, mapDispatchToProps)(CategoryFilter);
