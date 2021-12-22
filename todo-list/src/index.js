import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// should render following html
// <h1 class="title">Todo List</h1>

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <h1 class="title">Todo List</h1>,
  rootElement
)