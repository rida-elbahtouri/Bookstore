import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';

const initial = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'Amazing monkeys',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Becoming',
      category: 'Biography',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'IT',
      category: 'Horror',
    },
  ],
};

const store = createStore(rootReducer, initial);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
