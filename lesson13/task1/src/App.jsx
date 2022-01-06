import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from "./Products.jsx";
import Contacts from "./Сontacts.jsx";
import Home from "./Home.jsx";
import PageNotFound from "./PageNotFound.jsx";

const App = () => {
    return (
        <div className="page">
            <BrowserRouter>
                <Routes>
                    <Route
                        exact path="/" element={<Home />}
                    ></Route>
                    <Route
                        path="/contacts" element={<Contacts></Contacts>}>
                        
                    </Route>
                    <Route
                        path="/products" element={<Products></Products>}>
                        
                    </Route>
                    <Route
                        path="*" element={<PageNotFound></PageNotFound>}>
    
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;