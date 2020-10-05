import React from 'react';

const BookForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <div>
      <form>
        <label for="title">Title</label>
        <input type="text" placeholder="enter the book's title" />

        <label for="title">Categories</label>
        <select>
          {categories.map((cat) => (
            <option value={cat}>{cat}</option>
          ))}
        </select>
        <input type="submit" value="Create book" />
      </form>
    </div>
  );
};

export default BookForm;
