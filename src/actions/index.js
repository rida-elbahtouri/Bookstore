const CREATE_BOOK = (book) => {
  return {
    type: CREATE_BOOK,
    payload: book,
  };
};

const REMOVE_BOOK = (book) => {
  return {
    type: REMOVE_BOOK,
    payload: book,
  };
};
