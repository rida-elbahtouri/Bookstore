export const CREATE_BOOK = (book) => ({
  type: 'CREATE_BOOK',
  payload: book,
});

export const REMOVE_BOOK = (book) => ({
  type: 'REMOVE_BOOK',
  payload: book.id,
});

export const CHANGE_FILTER = (category) => ({
  type: 'CHANGE_FILTER',
  payload: category,
});
