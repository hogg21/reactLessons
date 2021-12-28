import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NumbersList from './NumbersList.jsx'

const numbers = [1, 2, 3, 4, 5, 10];


ReactDOM.render(<NumbersList numbers={numbers}></NumbersList>, document.getElementById('root'))