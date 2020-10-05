import React, { Component } from 'react';

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
          <input type="submit" value="Create book" />
        </form>
      </div>
    );
  }
}

export default BookForm;
