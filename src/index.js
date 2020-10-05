import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createstore } from 'redux';

const store = createstore();
ReactDOM.render(<App />, document.getElementById('root'));
