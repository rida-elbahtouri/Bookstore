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
        Title
        <input type="text" placeholder="enter the book's title" />

        Categories
        <select>
          {categories.map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <input type="submit" value="Create book" />
      </form>
    </div>
  );
};

export default BookForm;
