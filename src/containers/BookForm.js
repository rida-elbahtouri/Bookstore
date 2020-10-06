import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATE_BOOK } from '../actions/index';

class BookForm extends Component {
  categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
    };
  }

  handleChange = (e) => {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { CREATE_BOOK } = this.props;
    const { title, category } = this.state;
    CREATE_BOOK({
      id: Math.floor(Math.random() * 100),
      title,
      category,
    });
    this.setState({ title: '', category: '' });
  };

  render() {
    return (
      <div className="book-form">
        <h3>ADD NEW BOOK</h3>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            name="title"
            placeholder="Book title"
          />
          <select name="category" onChange={this.handleChange}>
            {this.categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <button onClick={this.handleSubmit} type="submit" value="Create book">
            ADD BOOK
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  CREATE_BOOK: (book) => {
    dispatch(CREATE_BOOK(book));
  },
});
BookForm.propTypes = {
  CREATE_BOOK: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(BookForm);
