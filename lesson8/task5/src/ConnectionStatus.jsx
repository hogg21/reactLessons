import React from "react";

class ConnectionStatus extends React.Component {
    state = {
        status: 'online'
    }
    componentDidMount() {
        window.addEventListener('online', this.setStatus)
        window.addEventListener('offline', this.setStatus)
    }
    componentWillUnmount() {
        window.removeEventListener('online', this.setStatus)
        window.removeEventListener('offline', this.setStatus)
    }
    setStatus = e => {
        this.setState({
            status: e.type
        })
    }
    render() {
        const statusClass = this.state.status === 'online' ? '' : 'status_offline'
        return (
            <div className={`status ${statusClass}`}>{this.state.status}</div>
        );
    }
}
export default ConnectionStatus;