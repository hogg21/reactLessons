import React, { Component } from "react";

class Demonsions extends Component {
    state = {
        width: null,
        height: null
    }
    componentDidMount() {
        window.addEventListener('resize', this.onResize)
        const { innerWidth, innerHeight } = window;
        this.setDimensions(innerWidth, innerHeight)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }
    onResize = (e) => {
        const { innerWidth, innerHeight } = e.target;
        this.setDimensions(innerWidth, innerHeight)
    }
    setDimensions = (width, height) => {
        this.setState({
            width,
            height
        })
        document.title = `${width} x ${height}`
    }
    render() {
        return (
            <div class="dimensions">
                {`${this.state.width}px - ${this.state.height}px`}
            </div>
        )
    }
}
export default Demonsions;