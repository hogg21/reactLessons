import React, { Component } from "react";
import UserProfile from "./UserProfile.jsx";
import UserMenu from "./UserMenu.jsx";

class Page extends Component {
    state = {
        userData: null
    }

    componentDidMount() {
        this.fetchUser(this.props.userId)
    }
    fetchUser = userId => {
        const userUrl = `https://api.github.com/users/${userId}`
        fetch(userUrl).then(response => response.json()).then(userData =>
            this.setState({
                userData,
            })
        );
    }
    render() {
        return (
            <div className="page">
                <header className="header">
                    <UserMenu userData={this.state.userData}></UserMenu>
                </header>
                <UserProfile userData={this.state.userData}></UserProfile>
            </div>
        );
    }
}
export default Page;