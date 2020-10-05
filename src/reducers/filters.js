const BooksFilter = (state = 'All', action) => {
  const findbooks = (term) => {
    [...state.filter((book) => book.category === term)];
  };
  switch (action.type) {
    case 'CHANGE_FILTER':
      if (action.payload === 'All') {
        return state;
      } else {
        return findbooks(action.payload);
      }

    default:
      return state;
  }
};
export default BooksFilter;
