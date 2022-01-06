import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from "./Contacts.jsx";
import Home from './Home.jsx';
import Products from './Products.jsx';
import PageNotFound from "./PageNotFound.jsx";

const App = () => {
    return (
        <div className="page">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home></Home>}></Route>
                    <Route path="/products" element={<Products></Products>}></Route>
                    <Route path="/contacts" element={<Contacts></Contacts>}></Route>
                    <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;