import React from "react";


class Toggler extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'Off'
        }
    }
    changeButton = () => {
        this.setState({
            text: this.state.text === 'On' ? 'Off' : 'On'
        })
    }
    render() {
        return (
            <>
                <button onClick={this.changeButton} className="toggler">{this.state.text}</button>
            </>
        )
    }
}
export default Toggler; 