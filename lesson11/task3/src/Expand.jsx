import React, {Component} from "react";

class Expand extends Component {
    state = {
        isShow: false
    }
    toggleShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">{this.props.title}</span>
                    <button className="expand__toggle-btn" onClick={this.toggleShow}>
                        {this.state.isVisible ? (
                            <i className="fas fa-chevron-up"></i>
                        ) : (
                            <i className="fas fa-chevron-down"></i>
                        )}
                    </button>
                </div>
                {this.state.isVisible ? <div className="expand__content">{this.props.children}</div> : null}
            </div>
        );
    }
}
export default Expand;