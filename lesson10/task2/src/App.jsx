import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart.jsx";
import Profile from './Profile.jsx';


class Page extends Component {
    state = {
        userData: {
            firstName: 'John',
            lastName: 'Doe'
        }
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            userData: {
                ...this.state.userData,
                [name]: value
            }
        })
    }
    render() {
        const { userData } = this.state;
        return (
            <div className="page">
                <h1 class="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
                <main className="content">
                    <ShoppingCart userData={userData.firstName}></ShoppingCart>
                    <Profile userData={userData} handleChange={this.handleChange}></Profile>
                </main>
            </div>
        )
    }
}
export default Page;