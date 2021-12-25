import React, { Component } from "react";

const RED = '#f00'
const GREEN = '#0f0'
const BLUE = '#00f'
class Colors extends Component {
    setBodyColor = (color, e) => {
        console.log(e);
        document.body.style.background = color;
    }
    render() {
        return (
            <div className="colors">
                <button style={{
                    backgroundColor:RED
                }} className="colors__button" onClick={ this.setBodyColor.bind(this, RED)}></button>
                <button style={{
                    backgroundColor: GREEN
                }} className="colors__button" onClick={(e) =>this.setBodyColor(GREEN, e)}></button>
                <button style={{
                    backgroundColor:BLUE
                }} className="colors__button" onClick={(e) => this.setBodyColor(BLUE, e)}></button>
            </div>
        );
    };
};

export default Colors;