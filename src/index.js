import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BooksReducer } from './reducers/books';

const initial = {
  books: [
    {
      id: Math.floor(Math.random() * 10),
      title: 'Amazing monkeys',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 10),
      title: 'Becoming',
      category: 'Biography',
    },
    {
      id: Math.floor(Math.random() * 10),
      title: 'IT',
      category: 'Horror',
    },
  ],
};

const store = createStore(BooksReducer, initial);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
