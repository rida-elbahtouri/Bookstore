import { combineReducers } from 'redux';
import BooksReducer from './books';
import BooksFilter from './filters';

const rootReducer = combineReducers({
  books: BooksReducer,
  filter: BooksFilter,
});

export default rootReducer;
