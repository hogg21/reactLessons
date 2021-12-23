import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Greeting firstName="Denis" lastName="Balan" date={new Date("2001-01-01T11:11:11.819z")}></Greeting>, rootElement)
