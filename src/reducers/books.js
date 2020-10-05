export const BooksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return [...state, action.payload];
    default:
      return state;
  }
};
