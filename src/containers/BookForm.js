import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.CREATE_BOOK({
      id: Math.floor(Math.random() * 10),
      title: this.state.title,
      category: this.state.category,
    });
    this.setState({ title: '', category: '' });
  };
  render() {
    return (
      <div>
        <form>
          Title
          <input
            onChange={this.handleChange}
            type="text"
            name="title"
            placeholder="enter the book's title"
          />
          Categories
          <select name="category" onChange={this.handleChange}>
            {this.categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <button
            onClick={this.handleSubmit}
            type="submit"
            value="Create book"
          >Submit</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    CREATE_BOOK: (book) => {
      dispatch(CREATE_BOOK(book));
    },
  };
};

export default connect(null, mapDispatchToProps)(BookForm);
