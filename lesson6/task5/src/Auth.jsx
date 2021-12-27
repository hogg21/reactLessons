import React from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            showSpinner: false
        }
    }
    onLogin = () => {
        this.setState({
            showSpinner: true
        })
        setTimeout(() => {
            this.setState({
                showSpinner: false,
                isLoggedIn: true
            })
        }, 2000)
    }
    onLogout = () => {
        this.setState({
            isLoggedIn: false
        })
    }
    render() {
        console.log(this.state.isLoggedIn)
        console.log(this.state.showSpinner);
        if (this.state.showSpinner) {
            return <Spinner size={40}></Spinner>
        }
        return this.state.isLoggedIn ? (
            <Logout onLogout={this.onLogout} />
          ) : (
            <Login onLogin={this.onLogin} />
          );
    }
}
export default Auth;