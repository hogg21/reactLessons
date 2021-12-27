import React from "react";

const Login = (props) => {
    const { onLogin } = props;
    if (onLogin) {
        return (
            <button className="btn login" onClick={onLogin}>Login</button>
        )
    }
    
}
export default Login;