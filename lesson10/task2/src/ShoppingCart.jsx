import React, { Component } from "react";
import CartTitle from "./CartTitle.jsx";
import ProductsList from './ProductsList.jsx'

class ShoppingCart extends Component {
    state = {
        cartItems: [
            {
                id: '1',
                name: 'Iphone 11',
                price: 999
            },
            {
                id: 2,
                name: 'iPad Pro',
                price: 799
            },
        ]
    }
    render() {
        const count = this.state.cartItems.length;
        return (
            <div className="column">
                <CartTitle userName={this.props.userName} count={count}></CartTitle>
                <ProductsList cartItems={this.state.cartItems}></ProductsList>
            </div>
        )
    }
}
export default ShoppingCart;
