import React from "react";
import ReactDOM from "react-dom";
import './index.scss';
import Search from "./search.jsx";

const rootElement = document.querySelector('#root');


ReactDOM.render(<Search name="Denis" age={17}></Search>, rootElement)
