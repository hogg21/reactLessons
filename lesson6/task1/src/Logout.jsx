import React from "react";

const Logout = (props) => {
    const { onLogout } = props;
    if (onLogout) {
        return (
            <button className="btn logout" onClick={onLogout}>Logout</button>
        )
    }
}
export default Logout;