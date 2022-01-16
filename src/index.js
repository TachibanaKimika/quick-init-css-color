import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Message from './components/Message';
React.$message = Message
ReactDOM.render(
    <App />,
  document.getElementById('root')
);