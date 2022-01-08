import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home.jsx";
import Contacts from "./Contacts.jsx";
import Products from "./Products.jsx";
import PageNotFound from "./PageNotFound.jsx";

const App = () => {
    return (
        <div className="page">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/contacts">
                        <Contacts></Contacts>
                    </Route>
                    <Route path="/products">
                        <Products></Products>
                    </Route>
                    <Route path="*">
                        <PageNotFound></PageNotFound>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default App;