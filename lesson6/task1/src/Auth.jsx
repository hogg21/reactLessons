import React, { Component } from "react";
import Greeting from './Greeting.jsx';
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    handleLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }
    handleLogout = () => {
        this.setState({
            isLoggedIn: false
        })
    }
    render() {
        return (
            <div className="panel">
                <Greeting isLoggedIn={this.state.isLoggedIn}></Greeting>
                {this.state.isLoggedIn ? <Logout onLogout={this.handleLogout}></Logout> : <Login onLogin={this.handleLogin}></Login>}
            </div>
        )
    }
}
export default Auth;