import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
const rootElement = document.querySelector('#root');

ReactDOM.render(
  <div class="greeting">
    <h1 class="greeting__title">Hello, world!</h1>
    <p class="greeting__text">I'm learning React</p>
  </div>,
  rootElement
)