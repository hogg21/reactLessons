import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./Home.jsx";
import Products from "./Products.jsx";

const App = () => {
    return (
        <div className="page">
            <BrowserRouter>
                <ul className="navigation">
                    <li className="navigation__item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
                <Routes>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/products" component={Products}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;